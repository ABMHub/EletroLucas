import styles from "./styles.js"
import Header,{TaskBar} from "../../components/Navbar/navbar.js";
import Button,{ImageButton, SvgButton} from "../../components/Button/button.js";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


export default function MainPage({navigation}) {
  return (
    <>
      <Header navigation={navigation}/>
      <View style={styles.container}>
        <View>
          <Text style={styles.test}>Que massa!</Text>
        </View>
        <Text>Home page</Text>
        <StatusBar style="auto" />
        <View style={styles.button_line}>
          <Button
            onPress={() => navigation.navigate('Test')}
            title="Go to notifications"
          />
          <SvgButton
            onPress={() => navigation.navigate('Test')}
            source={{uri:'../../../assets/sofa.svg'}}
          />
          <ImageButton 
            onPress={() => navigation.navigate('Test')}
            source={{uri:'../../../assets/sofa.svg'}}
          />
        </View>
        <TaskBar/>
      </View>
    </>
  );
}