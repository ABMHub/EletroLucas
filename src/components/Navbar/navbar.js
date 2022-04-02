import styles from "./styles.js"

import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { ImageBackground } from "react-native";
import { BackButton } from "../Button/button.js";

export default function Header({ navigation, current_page }) {

  let img_path = null
  let page_name = ""
  console.log(current_page)
  switch(current_page) {
    case "Home":
      img_path = require("./../../../assets/home.png")
      page_name = "Página Principal"
      break
    case "Test":
      img_path = require("./../../../assets/adaptive-icon.png")
      page_name = "Página de Teste"
      break
    default:
      img_path = require("./../../../assets/favicon.png")
      page_name = "Página Indefinida"
  }

  return (
    <View style={{height: Math.floor(Dimensions.get('window').height * 0.25)}}>
      <ImageBackground source={img_path} style={styles.imgBackground}>
        <View style={styles.buttons}>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={{paddingLeft: 10}}><Text style={styles.test}>{page_name}</Text></View>        
        </View>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}