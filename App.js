import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './src/pages/MainPage/main';
import TestPage from './src/pages/test/test';
import LoginPage from './src/pages/LoginPage/main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LampConfig from './src/pages/LampConfiguration/lamp_config';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen name="Test" component={TestPage} />
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="LampConfig" component={LampConfig}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}