import Header from "../../components/Navbar/navbar.js";
import styles from "./styles.js";

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { toHsv, fromHsv } from 'react-native-color-picker'
import { Slider } from "@miblanchard/react-native-slider";
import { ColorPicker } from "react-native-color-picker";
import { SvgXml } from "react-native-svg";
import { Text, View} from 'react-native';
import React, { useState } from 'react';


export default function LampConfig({navigation}) {

  const [online, setOnline] = useState(false);
  const [lightValue, setLightValue] = useState(0);
  const [colorValue, setColorValue] = useState({h: 200, s: 1, v: 0.75});

  // Codigo para variar a cor do slider
  let green = lightValue > 0.5 ? 255 - Math.floor((lightValue-0.5)*255)*2 : 255
  let red = lightValue > 0.5 ? 255 : Math.floor((lightValue)*255)*2
  let gradient_color = "rgb(" + red + "," + green + ",0)"

  // Codigo para variar a cor do botao de power
  let color = online ? "green" : "red"
  const power = `<svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32.6875 21.9375C23.9687 27.5625 18.0625 37.125 18.0625 48.0938C18.0625 64.9688 31.8438 78.75 49 78.75C66.1562 78.75 79.9375 64.9688 79.9375 48.0938C79.9375 37.125 74.0312 27.5625 65.3125 22.2187" stroke="` + color + `" stroke-width="4" stroke-miterlimit="10"/>
  <path d="M49 8.4375V33.75" stroke="` + color + `" stroke-width="4" stroke-miterlimit="10"/>
  </svg>`  

  return (
    <>
      <Header navigation={navigation} current_page={"LampConfig"}/>
      <View style={styles.container}>

        <View style={styles.powerButtonView}>
          <View style={styles.powerButton}>
            <Pressable style={styles.button} onPress={() => setOnline(!online)}>
              <SvgXml xml={power} height={128} width={128} style={styles.svg}/>
            </Pressable>
          </View>
          <View style={{alignItems: "center"}}>
            <Text style={{...styles.sliderText, fontSize:30}}>{online ? "Online" : "Offline"}</Text>
          </View>
        </View>

        <View style={styles.sliderView}>
          <Slider 
            value={lightValue}
            onValueChange={(value) => setLightValue(value)}
            trackStyle={{backgroundColor: gradient_color, height: 7}}
          />
          <View style={{alignItems: "center"}}>
            <Text style={styles.sliderText}>{Math.floor(lightValue*100)}%</Text>
          </View>
        </View>

        <View style={{flex: 1, padding: 45, paddingTop:0}}>
          <ColorPicker
            color={colorValue}
            onColorChange={color => setColorValue(color)}
            onColorSelected={color => alert(`Color selected: ${color}`)}
            style={{flex: 1}}
            />
            <Text style={{color: 'black', alignSelf: 'center', fontSize: 20, fontWeight: "bold"}}>{fromHsv(colorValue)}</Text>
        </View>

      </View>
    </>
  );
}