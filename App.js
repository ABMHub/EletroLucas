import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './src/pages/MainPage/main';
import TestPage from './src/pages/test/test';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen name="Test" component={TestPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}