import styles from "./styles.js"
import Header from "../../components/Navbar/navbar.js";
import Button from "../../components/Button/button.js";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


export default function MainPage({navigation}) {
  return (
    <>
      <Header navigation={navigation} current_page={"Home"}/>
      <View style={styles.container}>
        <View>
          <Text style={styles.test}>Que massa!</Text>
        </View>
        <Text>Home page</Text>
        <View style={styles.button_line}>
          <Button
            onPress={() => navigation.navigate('LampConfig')}
            title="Cofigurações da Lâmpada"
          />
          <Button
            onPress={() => navigation.navigate('Test')}
            title="Página de Teste"
          />
        </View>
      </View>
    </>
  );
}