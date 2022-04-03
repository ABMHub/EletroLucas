import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  test: {
    color: 'green'
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
                                                                        
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