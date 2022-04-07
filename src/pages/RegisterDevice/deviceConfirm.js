import styles from "./styles.js";
import Header,{TaskBar} from "../../components/Navbar/navbar.js";
import {ImageButton, SvgButton, SvgTxtButton, ConfirmButton, SelectDeviceButton, FinishButton} from "../../components/Button/button.js";
import { StatusBar } from 'expo-status-bar';
import {Modal, StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import { useEffect } from "react/cjs/react.production.min";
import React, {useState} from "react"

export default function DeviceConfirm({navigation}) {
    //obter uma lista com todos os dados referentes ao dispositivo que foi clicado
    let key_list = ["Nome do dispositivo", "Fabricante", "Modelo", "ENCE", "Voltagem"]
    let name_list = ["<NOME>", "<FABRICANTE>", "<MODELO>", "<ENCE>", "<VOLTAGEM>"]
    
    let render_list = []
    
    

    for (var i = 0; i < key_list.length; i++)
    {
        render_list.push(
            <View style={styles.infoContainerStyle}> 
                <Text style={styles.labelTextStyle}> {key_list[i]} </Text>
                <Text style={styles.infoTextStyle}> {name_list[i]} </Text>
            </View>
        )
    }

    //const [nickname, onChangeText] = React.useState("Opcional")
    
    // This is to manage Modal State
    const [isModalVisible, setModalVisible] = useState(false);
  
    // This is to manage TextInput State
    const [inputValue, setInputValue] = useState("");
  
    // Create toggleModalVisibility function that will
    // Open and close modal upon button clicks.
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };
    console.log(inputValue)
    return (
        <>
        <Header navigation={navigation} current_page={"RegisterDevice"}/>
            <ScrollView style={styles.container}>
                {/* <View style={styles.infoContainerStyle}>
                    <Text style={styles.labelTextStyle}> Apelido </Text>
                    <TextInput style={styles.infoTextStyle}
                        //style={styles.input}
                        onChangeText={onChangeText}
                        value={nickname}
                    />
                </View> */}
                <View>{render_list}</View>
                <FinishButton title='Finalizar' onPress={toggleModalVisibility} />
                
                {/** This is our modal component containing textinput and a button */}
                <Modal animationType="slide" 
                    transparent visible={isModalVisible} 
                    presentationStyle="overFullScreen" 
                    onDismiss={toggleModalVisibility}>
                    <View style={styles.viewWrapper}>
                        <View style={styles.modalView}>
                            <Text style={{paddingBottom:15, fontSize: 18}}> Deseja adicionar um apelido? </Text>
                            <TextInput placeholder="Digite o apelido" 
                                    value={inputValue} style={styles.textInput} 
                                    onChangeText={(value) => setInputValue(value)} />
    
                            {/** This button is responsible to close the modal */}
                            <View style={styles.button_line}> 
                                <ConfirmButton id={20} text={"Não"} onPress={toggleModalVisibility} />
                                <ConfirmButton id={21} text={"Sim"} onPress={toggleModalVisibility} />
                            </View>
                            {/** Aqui devo mudar o onPress pra redirecionar para outra pagina e enviar o 
                             * texto da input pro jv se o sujeito disser que quer colocar o apelido
                             * Se ele disser que quer e não digitar nada, devemos informar que nada foi informado
                             * Se ele disser que não é só seguir em frente
                             */}
                            {/* <Button title="Concluir" onPress={toggleModalVisibility} /> */}
                        </View>
                    </View>
                </Modal> 

                
            </ScrollView>
        <TaskBar navigation={navigation}/>
        </>
    )
}