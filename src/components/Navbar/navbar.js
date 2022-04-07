import styles from './styles.js';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { ImageBackground } from "react-native";
import { BackButton, ImageButton, SvgButton} from "../Button/button.js";
import { useRoute } from '@react-navigation/native';
import { SvgTask, PressedSvgTask } from "../../../assets/svg.js";

export default function Header({ navigation}) {
  let img_path = null
  let page_name = ""
  let current_page = useRoute().name
  switch(current_page) {
    case "Home":
      img_path = require("./../../../assets/home.png")
      page_name = "Página Principal"
      break
    case "RegisterDevice": 
      img_path = require("./../../../assets/registerDevice.png")
      page_name = "Página de Cadastro"
      break
    case "LampConfig":
      img_path = require("./../../../assets/room.png")
      page_name = "Configurações da\nLâmpada"
      break
    case "Test":
      img_path = require("./../../../assets/adaptive-icon.png")
      page_name = "Página de Teste"
      break
    case "Diagnosis":
      img_path = require("./../../../assets/eletric-panel.jpg")
      page_name = "Painel de Eletricidade"
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

function navWraper(navigation, path, id) {
  return () => navigation.navigate({name:path, key:id.toString()})
}

export function TaskBar({navigation}) {
  const current = useRoute().name
  let images = [] // todos os paths
  for(i = 1; i <= 5; i++){
    images.push(SvgTask(i,40,40))
  }
  let pathName = [
    'Home',
    'RegisterDevice',
    'Group',
    'Diagnosis',
    'Home'
  ]
  let select = -1
  for(i = 0; i < 5; i++){
    if(current == pathName[i]){
      images[i] = PressedSvgTask(i+1,40,40)
      select = i
      break
    }
  }
  let i = -1
  for(i = 0; i < images.length; i++){
    let onPress = navWraper(navigation, pathName[i], i)
    if(i == select){
      onPress = () => 1
    }
    images[i] = <SvgButton 
      onPress = {onPress}
      svg={images[i]}
      key={i}
    />
  }
  return (
    <View style={styles.footer}>
      {images}
    </View>   
  );  
}
