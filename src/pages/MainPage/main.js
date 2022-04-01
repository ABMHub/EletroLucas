import styles from "./styles.js"
import Header from "../../components/Navbar/navbar.js";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function MainPage() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View>
          <Text style={styles.test}>oi</Text>
        </View>
        <Text>Open up App.js to start wdasdasdaorking on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}