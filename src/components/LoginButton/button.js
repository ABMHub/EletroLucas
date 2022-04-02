import React from 'react';
import { Text, View, StyleSheet, Pressable, Image} from 'react-native';
import styles from "./styles.js"


export default function LoginButton(props) {
  const {onPress, title = 'PLACEHOLDER'/*, onPress2, title2 = 'Jubiraiba'*/} = props;
  return (
    <View style={styles.button_div}>
      <Pressable style={styles.button} onPress={onPress}>
        <View><Text>{title}</Text></View>
      </Pressable>
    </View>
  );
}