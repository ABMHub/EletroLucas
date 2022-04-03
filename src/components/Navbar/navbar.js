import styles from "./styles.js"
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { ImageBackground } from "react-native";
import { BackButton } from "../Button/button.js";
import { useRoute } from '@react-navigation/native';

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

export function TaskBar(/*images, highlited,*/ route) {
  const current = useRoute().name
  let images = [

  ] // todos os paths
  switch(current){
    case 'Home':
      break;
  }
  return (
    <View>
      
    </View>   
  );  
}