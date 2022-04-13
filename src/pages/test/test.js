import styles from "./styles.js"
import Header from "../../components/Navbar/navbar.js";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function TestPage( {navigation} ) {
  return (
    <>
      <Header navigation={navigation} current_page={"Test"}/>
      <View style={styles.container}>
        <View>
          <Text style={styles.test}>oi</Text>
        </View>
        <Text>Test Page</Text>
      </View>
    </>
  );
}