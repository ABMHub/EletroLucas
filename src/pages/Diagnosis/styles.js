import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#ECECF5',
        alignItems: 'center',
      },
      button_grid: {
        width: "90%",
        height: "65%",
        flexDirection: 'row',
        backgroundColor: '#F8F7FE',
        padding: 10,
        margin: 20,
        borderRadius: 5,

      },
      txt: {
        paddingLeft: '5%',
        textAlign: 'center',
        color: '#00FF00',
      },
      dev_names: {
        width: "90%",
        height: "19%",
        backgroundColor: '#F8F7FE',
        borderRadius: 5,
        position: 'absolute',
        bottom: 0,
        marginBottom: '15%',
        flexDirection: 'column-reverse'
      },
      graphs: {
        width: "100%",
        height: "90%",
        position: "absolute", 
        bottom: 0,
        left:0,
        right: 0,
        marginLeft: "4%",
        flexDirection: 'row-reverse',
      }
});
export default styles;