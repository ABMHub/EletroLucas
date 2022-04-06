import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  test: {
    color: 'green'
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#ECECF5',
  },
  button_grid: {
    width: "100%",
    flexDirection: 'row',
    padding: 10,
    flexWrap: "wrap"
  }
});

export default styles