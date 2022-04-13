import styles from "./styles.js"
import RenderButton from "./RenderButton.js";
import Header,{TaskBar} from "../../components/Navbar/navbar.js";
import Button,{ImageButton, SvgButton} from "../../components/Button/button.js";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { getAllJson, clearAll } from "../../model/JsonFunction.js";
import { useState, useEffect } from "react";
import { Alert } from "react-native-web";
import { clear } from "react-native/Libraries/LogBox/Data/LogBoxData";
import { useIsFocused } from "@react-navigation/native";

export default function MainPage({navigation}) {
  //Vetor com todos os dispositivos que tem salvos
  //clearAll()
  
  const [state, setState] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => 
    isFocused && getAllJson().then((response) => {
      setState(response)
    }), [isFocused]
  )

  return (
    <>
      <Header navigation={navigation}/>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.button_grid}>
          {RenderButton(state, navigation)}
        </View>
      </ScrollView >
      <TaskBar navigation={navigation}/>
    </>
  );
}

// Modelo de como usar as funcoes da camada de persistencia
// const [state, setState] = useState(0);
// getMyObject().then((response) => {
//     setState(response)
// })

// console.log("Aqui fora antes do x")
// useEffect(() => {
//     if(state){
//     console.log("Vou bater no Lucas -> Ok")
//     console.log(state)
//     }
//     else{
//     console.log("Vou bater no Alequi -> Not Ok")
//     }
// })