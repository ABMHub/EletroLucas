import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export const getMyObject = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e){
        console.log("Erro ao recuperar um objeto JSON")
    }
}

export const setObjectValue = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch(e){
        console.log("Erro ao editar/criar um objeto JSON")
    }
}

export const removeValue = async (key) => {
    try {
        let keys = await getAllKeys()
        for(let i = Number(key)+1; i < keys.length; i++){
            let value = await getMyObject(keys[i])
            await setObjectValue((i-1).toString(), value)
        }
        await AsyncStorage.removeItem(keys[keys.length-1])
    } catch(e){
        console.log("Erro ao remover um objeto JSON")
    }
}

const convertAndSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i])
    }
    arr.sort()
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toString()
    }
    return arr
}

export const getAllKeys = async () => {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys()
        return convertAndSort(keys)
    } catch(e){
        console.log("Erro ao recuperar as chaves salvas")
    }
}

export const getAllJson = async (keys) => {
    let values = []
    try {
        keys = await getAllKeys()
        for(let i = 0; i < keys.length; i++){
            let value = await getMyObject(keys[i])
            values.push(value)
        }
        return values
    } catch(e){
        console.log("Erro ao recuperar os JSON salvos")
    }
}

export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch(e){
        console.log("Erro ao limpar os arquivos")
    }
}


/* Funcao de teste das operacoes da camada de persistencia */
// export async function TestFunc(id){
//     let y
//     if(id == "0"){
//         y = {"nome": "Lucas", "idade": 21, "profissao": "caotico"}
//     }
//     else if(id == "1"){
//         y = {"nome": "Alequi", "idade": 20, "profissao": "bobao"}
//     }
//     else{
//         y = {"nome": "Joao", "idade": 20, "profissao": "ditador"}
//     }

//     await setObjectValue(id, y)
//     // let x = await getMyObject(id)
//     // let k = await getAllKeys()
//     // await clearAll()
//     // await removeValue(id)
//     // let v = await getAllJson()
//     // console.log("Teste de valor")
//     console.log(k)
// }