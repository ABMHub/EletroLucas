import styles from "./styles.js"
import Header from "../../components/Navbar/navbar.js";
import Button from "../../components/Button/button.js";
import RenderButton from "./RenderButton.js";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


export default function MainPage({navigation}) {
  const a = (
    <>
      <Header navigation={navigation}/>
      <View style={styles.container}>
        <View>
          <Text style={styles.test}>oi</Text>
        </View>
        <Text>Home page</Text>
        <StatusBar style="auto" />

        <View style={styles.button_line}>
          {RenderButton([{"id_aparelho": 1,"id_icon": 1,"nome": "Lampada"}, {"id_aparelho": 1,"id_icon": 1,"nome": "Lampada"}, {"id_aparelho": 1,"id_icon": 1,"nome": "Lampada"}], navigation)}
        </View>
      </View>
    </>
  );
  return a
}

