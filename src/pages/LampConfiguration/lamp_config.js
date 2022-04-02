import Header from "../../components/Navbar/navbar.js";

import { StyleSheet, Text, View} from 'react-native';
import { SvgXml } from "react-native-svg";
import styles from "./styles.js";
import React, { useState } from 'react';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";


export default function LampConfig({navigation}) {

  const [online, setOnline] = useState(false);

  let color = online ? "green" : "red"

  const power = `<svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32.6875 21.9375C23.9687 27.5625 18.0625 37.125 18.0625 48.0938C18.0625 64.9688 31.8438 78.75 49 78.75C66.1562 78.75 79.9375 64.9688 79.9375 48.0938C79.9375 37.125 74.0312 27.5625 65.3125 22.2187" stroke="` + color + `" stroke-width="4" stroke-miterlimit="10"/>
  <path d="M49 8.4375V33.75" stroke="` + color + `" stroke-width="4" stroke-miterlimit="10"/>
  </svg>
  `

  return (
    <>
      <Header navigation={navigation} current_page={"LampConfig"}/>
      <View style={styles.container}>
        <View style={styles.powerButtonViwe}>
          <View style={styles.powerButton}>
            <Pressable style={styles.button} onPress={() => setOnline(!online)}>
              <SvgXml xml={power} height={128} width={128} style={styles.svg}/>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}