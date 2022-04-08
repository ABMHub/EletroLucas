import Button,{ImageButton, SvgButton, SvgTxtButton} from "../../components/Button/button.js";
import Header,{TaskBar} from "../../components/Navbar/navbar.js";
import styles from "./styles.js";

import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function number(i)
{
  return i+1
}

function categoryWrapper(key, navigation) {
  return () => navigation.navigate('SelectDevice', {"category":key+1})
}

export default function RegisterDevice({navigation}) {
    name_list = ["Smart TV", "Ar Condicionado", "Lâmpada", "Cafeteira", "Fechadura", "Outro"]
    render_list = []
    
    for (var i = 0; i < name_list.length; i++)
    {
      render_list.push(
        <SvgTxtButton
          onPress={name_list[i] == "Lâmpada" ? categoryWrapper(i, navigation) : () => Alert.alert("Essa categoria não foi encontrada")}
          id={i+10}
          key={i}
          text={name_list[i]}
        />
      )
    }

    return (
        <>
            <Header navigation={navigation} current_page={"RegisterDevice"}/>
              <ScrollView style={styles.container}>
                {render_list}
              </ScrollView> 
            <TaskBar navigation={navigation}/>
        </>
    )



}