import { StyleSheet, Text, View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white',
  },
  svg: {
    color: 'black'
  },
  powerButtonView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    paddingTop: 10,
    backgroundColor: "#f0f0ff",
    marginLeft: "27%",
    marginRight: "27%",
    borderRadius: 20,
    elevation: 10,

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
    paddingBottom: 0,
    marginBottom: 0
  },
  sliderText: {
    marginTop: 0,
    paddingTop: 0,
    color: "black",
    fontSize: 40,
    alignItems: 'center'
  },
  colorPickerView: {
    
    flex: 1,
    padding: 20,
    paddingTop:0,
    backgroundColor:"#f0f0ff",
    margin: 25,
    marginTop: 0,
    borderRadius: 20,
    elevation: 10,
  }
});

export default styles