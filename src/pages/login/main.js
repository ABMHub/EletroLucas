import {LoginImage, styles} from "./styles.js"
import React from "react"
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Text, View, TextInput, SafeAreaView} from 'react-native';

export default function Login() {
    var image = require ("../../components/bkgimage/login.jpg");
    const UselessTextInput = () => {
        const [login, onChangeText] = React.useState("Login");
        const [senha, onChangeSenha] = React.useState(null);
        return (
            <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder='Login'
                defaultValue={login}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeSenha}
                secureTextEntry={true}
                value={senha}
                placeholder='Senha'
                keyboardType="default"
            />
            </SafeAreaView>
        );
    }
    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode= "cover" style={LoginImage.container}>
                    <Text style={styles.title}>ABMHUB</Text>
                    <UselessTextInput></UselessTextInput>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </>
    );
  }