import styles from "./styles.js";
import Header,{TaskBar} from "../../components/Navbar/navbar.js";
import Button,{ImageButton, SvgButton, SvgTxtButton} from "../../components/Button/button.js";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function RegisterDevice({navigation}) {
    name_list = ["Smart TV", "Ar Condicionado", "Lâmpada", "Cafeteria", "Fechadura", "Outro"]
    render_list = []
    
    for (var i = 0; i < name_list.length; i++)
    {
      render_list.push(
        <SvgTxtButton
          onPress={() => navigation.navigate('Test')}
          id={i}
          key={i}
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