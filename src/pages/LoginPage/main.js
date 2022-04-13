import {LoginImage, styles} from "./styles.js"
import React from "react"
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Text, View, TextInput, SafeAreaView, Button} from 'react-native';

export default function LoginPage({navigation}) {
    var image = require ("../../../assets/login.png");
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
                    <Text style={styles.title}>EletroLucas</Text>
                    <View style={styles.bkg}>
                        <UselessTextInput></UselessTextInput>
                         <View style={styles.btt}>
                            <Button
                                onPress={() => navigation.navigate('Home')}
                                title="Entrar">
                            </Button>
                        </View>
                    </View>

                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
    );
  }