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
    // justifyContent: 'center',
  },
  button_grid: {
    // backgroundColor: "black",
    // alignItems: 'center',
    // justifyContent: 'center',
    // display: 'flex',
    //width: "100%",
    flexDirection: 'row',
    padding: 10,
    flexWrap: "wrap"
  },
});

export default styles