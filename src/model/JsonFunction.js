import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const pushObject = async (obj) => {
    try {
        const size = Number((await getAllKeys()).length + 1).toString()
        obj['id'] = size
        await setObjectValue(obj['id'], obj)
    } catch(e) {
        console.log('Erro ao adicionar dispositivo como objeto JSON')
    }
}

export const setObjectParam = async (key,parameter, value) => {
    try {
        let obj = await getMyObject(key)
        obj[parameter] = value
        await setObjectValue(key,obj)
    } catch(e) {
        console.log('Erro ao editar parametro de objeto JSON')
    }
}

export const removeValue = async (key) => {
    try {
        let keys = await getAllKeys()
        for(let i = Number(key)+1; i < keys.length; i++){
            let value = await getMyObject(keys[i])
            value.id = (i-1).toString()
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
// export async function TestFunc(y=0, id=0){
//     // if(id == "0"){
//     //     y = {"nome": "Lucas", "idade": 21, "profissao": "caotico"}
//     // }
//     // else if(id == "1"){
//     //     y = {"nome": "Alequi", "idade": 20, "profissao": "bobao"}
//     // }
//     // else{
//     //     y = {"nome": "Joao", "idade": 20, "profissao": "ditador"}
//     // }

//     // await setObjectValue(id, y)
//     // let x = await getMyObject(id)
//     // await clearAll()
//     await removeValue("1")
//     let k = await getAllKeys()
//     let v = await getAllJson()
//     console.log(v)
//     console.log(k)
// }