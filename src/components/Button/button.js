import React from 'react';
import { Text, View, StyleSheet, Pressable, Image} from 'react-native';
import styles from "./styles.js"


export default function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (

        <Pressable style={styles.button} onPress={onPress}>
          <Image source={require('../../../assets/sofa.png')}></Image>
        </Pressable>
      

    );
  }