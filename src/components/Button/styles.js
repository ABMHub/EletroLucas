import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
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
    svg_button: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    button_line: {
      width: '100%',
      aspectRatio: 4.5,
      padding: 5
      
    },
    svg_txt_button: {
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "#fdfdfd",
      margin: 5
    },
    img_button: {
      width:undefined,
      height:undefined,
      resizeMode:"contain",
    },

    TextStyle :{
      color: "#67D1B1",
      marginBottom : 4,
      marginRight :0,
      fontSize: 26
    },

    TxtButtonStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fdfdfd',
      borderRadius: 5 ,
      width: '100%',
      aspectRatio: 4.5,
      padding: 10,
      justifyContent: 'space-between'
     
    },

    selectDeviceButtonStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: "gray",
      borderRadius: 5 ,
      width: '100%',
      aspectRatio: 6,
      padding: 10,
      justifyContent: 'space-between'
     
    },
    
    SeparatorLine :{
      backgroundColor : '#fff',
      width: 1,
      height: 40
    }
  });

  export default styles