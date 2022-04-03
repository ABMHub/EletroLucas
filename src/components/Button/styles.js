import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      // paddingVertical: 12,
      // paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "#fdfdfd",
      margin: 5
    },
    
    button_div: {
      width: '50%',
      aspectRatio: 1
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    img: {
      height: '80%',
      width: '80%'
    },
    imgbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      // paddingVertical: 12,
      // paddingHorizontal: 32,
      //backgroundColor: 'transparent',
    },
  });

  export default styles