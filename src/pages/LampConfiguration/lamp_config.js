import { getMyObject, setObjectValue } from "../../model/JsonFunction.js";
import Header from "../../components/Navbar/navbar.js";
import styles from "./styles.js";

import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useReducer } from "react/cjs/react.production.min";
import { toHsv, fromHsv } from 'react-native-color-picker'
import { Slider } from "@miblanchard/react-native-slider";
import { useIsFocused } from "@react-navigation/native";
import { ColorPicker } from "react-native-color-picker";
import React, { useState, useEffect } from 'react';
import { SvgXml } from "react-native-svg";
import { Text, View } from 'react-native';

export default function LampConfig({route, navigation}) {
  const objId = route.params["id"]
  // console.log(route.params)

  const isFocused = useIsFocused();
  const [updateColor, setUpdateColor] = useState(false)
  const [connected, setConnected] = useState(false)
  const [lampObject, setLampObject] = useState(undefined)

  const [online, setOnline] = useState(false);

  const [lightValue, setLightValue] = useState(0);
  const [oldLightValue, setOldLightValue] = useState(0);

  const [colorValue, setColorValue] = useState({"h": 200, "s": 1, "v": 0.75});
  const [oldColorValue, setOldColorValue] = useState({"h": 200, "s": 1, "v": 0.75});

  const [gradientColor, setGradientColor] = useState("rgb(0,0,0)");
  const [powerSvg, setPowerSvg] = useState(`<svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32.6875 21.9375C23.9687 27.5625 18.0625 37.125 18.0625 48.0938C18.0625 64.9688 31.8438 78.75 49 78.75C66.1562 78.75 79.9375 64.9688 79.9375 48.0938C79.9375 37.125 74.0312 27.5625 65.3125 22.2187" stroke="red" stroke-width="4" stroke-miterlimit="10"/>
  <path d="M49 8.4375V33.75" stroke="red" stroke-width="4" stroke-miterlimit="10"/>
  </svg>`);

  useEffect(() => {
    if (!connected) return
    setObjectValue(objId, lampObject)
  },[lampObject])

  useEffect(() => {
    if (!connected || !isFocused) return
    const timeout = setTimeout(() => setUpdateColor(!updateColor), 1000)
    if (oldColorValue == colorValue) return
    setOldColorValue(colorValue)
    return () => clearTimeout(timeout)
  }, [connected, updateColor])

  useEffect(() => {
    if (!connected) return
    const configObj = {
      "hsv": oldColorValue,
      "intensity": oldLightValue,
      "isOn": online
    }
    setLampObject({...lampObject, "configs": configObj})
  }, [online, oldColorValue, oldLightValue])

  useEffect(() => {
    const color = online ? "green" : "red"
    setPowerSvg(`<svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.6875 21.9375C23.9687 27.5625 18.0625 37.125 18.0625 48.0938C18.0625 64.9688 31.8438 78.75 49 78.75C66.1562 78.75 79.9375 64.9688 79.9375 48.0938C79.9375 37.125 74.0312 27.5625 65.3125 22.2187" stroke="` + color + `" stroke-width="4" stroke-miterlimit="10"/>
    <path d="M49 8.4375V33.75" stroke="` + color + `" stroke-width="4" stroke-miterlimit="10"/>
    </svg>`)
  }, [online])

  useEffect(() => {
    const green = lightValue > 0.5 ? 255 - Math.floor((lightValue-0.5)*255)*2 : 255
    const red = lightValue > 0.5 ? 255 : Math.floor((lightValue)*255)*2
    setGradientColor("rgb(" + red + "," + green + ",0)")
  }, [lightValue])

  useEffect(() => {
    getMyObject(objId).then((response) => {
      setLampObject(response)
      const config = response["configs"]
      
      setOnline(config["isOn"])

      setLightValue(config["intensity"])
      setOldLightValue(config["intensity"])

      setColorValue(config["hsv"])
      setOldColorValue(config["hsv"])

      setConnected(true)
    }).catch(() => {
      console.log("Erro na conexão com os dados")
    })}, [])

  return (
    <>
      <Header navigation={navigation} current_page={"LampConfig"}/>
      <View style={styles.container}>

        <View style={styles.powerButtonView}>
          <View style={styles.powerButton}>
            <Pressable style={styles.button} onPress={() => setOnline(!online)}>
              <SvgXml xml={powerSvg} height={128} width={128} style={styles.svg}/>
            </Pressable>
          </View>
          <View style={{alignItems: "center"}}>
            <Text style={{...styles.sliderText, fontSize:30}}>{online ? "Online" : "Offline"}</Text>
          </View>
        </View>

        <View style={styles.sliderView}>
          <Text style={{fontFamily: "monospace"}}>Intensidade</Text>
          <Slider 
            value={lightValue}
            onValueChange={(value) => setLightValue(value)}
            trackStyle={{backgroundColor: gradientColor, height: 7}}
            onSlidingComplete={() => setOldLightValue(lightValue)}
          />
          <View style={{alignItems: "center"}}>
            <Text style={styles.sliderText}>{Math.floor(lightValue*100)}%</Text>
          </View>
        </View>

        <View style={styles.colorPickerView}>
          <ColorPicker
            color={colorValue}
            oldColor={fromHsv(oldColorValue)}
            onColorChange={color => setColorValue(color)}
            onColorSelected={() => setOldColorValue(colorValue)}
            onOldColorSelected={() => setColorValue(oldColorValue)}
            style={{flex: 1}}
            sliderComponent={Slider}
            />
            <Text style={{color: 'black', alignSelf: 'center', fontSize: 20, fontWeight: "bold"}}>{fromHsv(colorValue)}</Text>
        </View>

      </View>
    </>
  );
}