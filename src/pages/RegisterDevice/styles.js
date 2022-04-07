import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

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
  },
  buttonTextStyle: {
    color: "black",
    fontSize: 20
  },
  labelTextStyle: {
    color: "#858585",
    fontSize: 14
  },
  infoTextStyle: {
    color: "black",
    fontSize: 20
  },
  infoContainerStyle: {
    flex: 1,
    margin: 17,
    padding: 3,
    borderBottomWidth: 2,
    borderColor: "#8F8F8F",
    borderRadius: 5,
  },


  button_line: {
    width: "100%",
    //alignItems: "center",
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft:40,
    paddingRight:30,
    //flexWrap: "wrap"
  },

  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  viewWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      elevation: 5,
      transform: [{ translateX: -(width * 0.4) }, 
                  { translateY: -90 }],
      height: height * 0.35,
      width: width * 0.8,
      backgroundColor: "#f3f3f3",
      borderRadius: 7,
  },
  textInput: {
      width: "80%",
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: 1,
      marginBottom: 8,
  },
});

export default styles