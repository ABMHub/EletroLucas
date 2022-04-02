import React from 'react';
import { Text, View, StyleSheet, Pressable, Image} from 'react-native';
import { Banheiro } from '../../../assets/svg.js';
import styles from "./styles.js"
import { BackArrow } from '../../../assets/svg.js';


export default function Button(props) {
  const {onPress, title, id} = props;
  return (
    <View style={styles.button_div}>
      <Pressable style={styles.button} onPress={onPress}>
        <Banheiro height={"70%"} width={"70%"} id={id}/>
        <View><Text>{title}</Text></View>
      </Pressable>
    </View>
  );
}

export function BackButton({onPress}) {
  return (
    <View>
      <Pressable onPress={onPress}>
        <BackArrow height={32} width={32}/>
      </Pressable>
    </View>
  )
}