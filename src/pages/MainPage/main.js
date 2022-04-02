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
          <Text style={styles.test}>oi</Text>
        </View>
        <Text>Home page</Text>
        <View style={styles.button_line}>
          <Button
            onPress={() => navigation.navigate('Test')}
            title="Go to notifications"
          />
          <Button
            onPress={() => navigation.navigate('Test')}
            title="Go to notifications"
          />
        </View>
      </View>
    </>
  );
}