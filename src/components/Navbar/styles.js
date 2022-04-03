import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  test: {
    color: 'white',
    fontSize: 30
  },
  buttons: {
    flexDirection: 'row',
    paddingTop: 35,
    paddingLeft: 20
  },
  imgBackground: {
    height: '100%',
    width: "100%"
  },

  bkg: {
    position: 'relative',
    marginLeft:'5%',
    marginRight: '5%',
    justifyContent: 'center',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fdfdfd",
    margin: 5
},

});

export default styles