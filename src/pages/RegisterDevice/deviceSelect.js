import styles from "./styles.js";
import Header,{TaskBar} from "../../components/Navbar/navbar.js";
import Button,{ImageButton, SvgButton, SvgTxtButton, SelectDeviceButton} from "../../components/Button/button.js";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function DeviceConfirm({navigation}) {
  name_list = ["Lampada Verilog", "Lampada Positovo"]
  render_list = []
  
  for (var i = 0; i < name_list.length; i++)
  {
    render_list.push(
      <SelectDeviceButton
        onPress={() => navigation.navigate('DeviceConfirm')}
        id={i}
        key={i}
        text={name_list[i]}
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