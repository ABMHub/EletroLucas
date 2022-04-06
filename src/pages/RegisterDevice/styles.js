import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  test: {
    color: 'green'
  },
  container: {
    flex: 1,
    width: "100%",
    // display: 'flex',
    backgroundColor: '#ECECF5',
    // alignItems: 'center',
    // justifyContent: 'center's,
  },
  button_grid: {
    // backgroundColor: "black",
    // alignItems: 'center',
    // justifyContent: 'center',
    // display: 'flex',
    width: "100%",
    flexDirection: 'row',
    padding: 10,
    flexWrap: "wrap"
  },
  buttonTextStyle: {
    color: "black",
    fontSize: 20
  }


  // container: {
  //   flex: 1,
  //   margin: 10,
  //   marginTop: 30,
  //   padding: 30,
  // },
  // buttonGPlusStyle: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#dc4e41',
  //   borderWidth: 0.5,
  //   borderColor: '#fff',
  //   height: 40,
  //   borderRadius: 5,
  //   margin: 5,
  // },
  // buttonFacebookStyle: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#485a96',
  //   borderWidth: 0.5,
  //   borderColor: '#fff',
  //   height: 40,
  //   borderRadius: 5,
  //   margin: 5,
  // },
  // buttonImageIconStyle: {
  //   padding: 10,
  //   margin: 5,
  //   height: 25,
  //   width: 25,
  //   resizeMode: 'stretch',
  // },
  // buttonTextStyle: {
  //   color: '#fff',
  //   marginBottom: 4,
  //   marginLeft: 10,
  // },
  // buttonIconSeparatorStyle: {
  //   backgroundColor: '#fff',
  //   width: 1,
  //   height: 40,
  // },

});

export default styles