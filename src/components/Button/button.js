import React from 'react';
import { Text, View, StyleSheet, Pressable, Image} from 'react-native';
import { Banheiro } from '../../../assets/svg.js';
import styles from "./styles.js"


export default function Button(props) {
  const {onPress, title = 'PLACEHOLDER'} = props;
  return (
    <View style={styles.button_div}>
      <Pressable style={styles.button} onPress={onPress}>
        {/* <Image source={banheiro} style={styles.img} /> */}
        <Banheiro height={"70%"} width={"70%"}/>
        <View><Text>{title}</Text></View>
      </Pressable>
    </View>
  );
}