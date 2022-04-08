import styles from "./styles.js";
import Header,{TaskBar} from "../../components/Navbar/navbar.js";
import Button,{ImageButton, SvgButton, SvgTxtButton, SelectDeviceButton} from "../../components/Button/button.js";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

function jsonWrapper(json, navigation) {
  return () => navigation.navigate('DeviceConfirm', {"data":json})
}

export default function DeviceConfirm({route, navigation}) {
  var {category} = route.params
  render_list = []

  //Le todos os json cuja categoria eh igual a category
  let json = require('./data.json');
  let json_list = []
  
  for (var i = 0; i < json.length; i++) 
  {
    if (json[i]['Categoria'] == category)
    {
      json_list.push(json[i])
    }
  }
  
  for (var i = 0; i < json_list.length; i++)
  {
    render_list.push(
      <SelectDeviceButton
        onPress= {jsonWrapper(json_list[i], navigation)}
        id={json_list[i].id}
        key={i}
        text={json_list[i]["Nome do dispositivo"]}
        textStyle={styles.buttonTextStyle}
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