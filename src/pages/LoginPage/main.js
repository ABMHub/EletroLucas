import {LoginImage, styles} from "./styles.js"
import React from "react"
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Text, View, TextInput, SafeAreaView, Button} from 'react-native';

export default function LoginPage({navigation}) {
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
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode= "cover" style={LoginImage.container}>
                    <Text style={styles.title}>ABMHUB</Text>
                    <View style={styles.bkg}>
                        <UselessTextInput></UselessTextInput>
                        <View style={{padding:5}}></View>
                        <Button
                            onPress={() => navigation.navigate('Home')}
                            title="Entrar">
                        </Button>
                        <View style={{padding:5}}></View>
                        <Button
                            onPress={() => navigation.navigate('Home')}
                            title="Cadastrar">
                        </Button>
                    </View>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
    );
  }