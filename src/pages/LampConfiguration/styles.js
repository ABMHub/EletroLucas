import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white',
  },
  svg: {
    color: 'black'
  },
  powerButtonViwe: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  },
  powerButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderView: {
    padding: "5%",
    paddingBottom: 0
  },
  sliderText: {
    color: "black",
    fontSize: 40,
    alignItems: 'center'
  },
});

export default styles