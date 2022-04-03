import styles from "./styles.js"
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { ImageBackground } from "react-native";
import { BackButton } from "../Button/button.js";
import { useRoute } from '@react-navigation/native';
import { ImageButton, SvgButton} from "../Button/button.js";
import Svg from "react-native-svg";

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
export function TaskBar({navigation}) {
  const current = useRoute().name
  let images = [
    
  ] // todos os paths
  let isSvg = [
    true, false, false, true, true
  ]
  let pathName = [
    'Home',
    'Device',
    'Group',
    'Diagnosis',
    'Configuration'
  ]
  switch(current){
    
    case 'Home':
      images[0] = {}
      break
    case 'Device':
      images[1] = {}
      break  
    case 'Group':
      images[2] = {}
      break
    case 'Diagnosis':
      images[3] = {}
      break
    case 'Configuration':
      images[4] = {}
      break
  }
  for(i = 0; i < images.length; i++){
    if(isSvg){
      images[i] = <SvgButton 
        onPress = {() => navigation.navigate(pathName[i])}
        svg={images[i]}
      />
    }else{
      images[i] = <ImageButton
        onPress = {() => navigation.navigate(pathName[i])}
        source={images[i]}
      />
    }
  }
  return (
    <View>
      {images}
    </View>   
  );  
}
