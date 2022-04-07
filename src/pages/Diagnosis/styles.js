import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#FF0000',
        alignItems: 'center',
      },
      button_grid: {
        width: "80%",
        height: "55%",
        flexDirection: 'row',
        backgroundColor: '#ECECF5',
        padding: 10,
        margin: 20,
        flexWrap: "wrap",
        borderRadius: 5,
      },
      txt: {
        paddingLeft: '5%',
        textAlign: 'center',
        color: '#00FF00',
      },
      dev_names: {
        width: "80%",
        height: "25%",
        backgroundColor: '#ECECF5',
        borderRadius: 5,
      }
});
export default styles;