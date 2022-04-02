import styles from "./styles.js"
import Header from "../../components/Navbar/navbar.js";
import Button from "../../components/Button/button.js";
import RenderButton from "./RenderButton.js";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';


export default function MainPage({navigation}) {
  var json = require('./data.json');
  return (
    <>
      <Header navigation={navigation} current_page={"Home"} />
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.button_grid}>
          {RenderButton(json, navigation)}
        </View>
      </ScrollView>
    </>
  );
}

