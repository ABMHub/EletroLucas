import { Text, View} from 'react-native';
import Header,{TaskBar} from "../../components/Navbar/navbar";
import styles from "./styles";
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {getAllJson, setObjectParam} from "../../model/JsonFunction.js"
/*
async function genInfoPair(best) {
    let names = []
    let graphs = []

    for(i = 0; i < best.length; i++) {
        let t = 5
    }

    for(i = 0; i < best.length; i++) {
    }

    return [names,graphs]
}*/

async function readAndUpdate() {
    let dayMilli = 86400000
    let best = []
    let jsons = await getAllJson()
    let changes = []
    
    for(let i = 0; i < jsons.length; i++){
        let dNow = Date.now()
        let diff = Math.floor(dNow/dayMilli)
        if(jsons[i]['time']['changeDay'] < diff) {
            let ch = 0
            let idx = jsons[i]['time']['changeArray'].length
            let hp = jsons[i]['time']['lastChange']
            hp = Math.ceil(hp/dayMilli)*dayMilli - hp 
            jsons[i]['time']['changeArray'][idx-1] += hp 

            if (jsons[i]['configs']['isOn']) {
                ch = dNow - jsons[i]['time']['lastChange'] - hp
            }
            for(let j = 1; j < diff - jsons[i]['time']['changeDay']; j++) {
                jsons[i]['time']['changeArray'].push(Math.min(ch,dayMilli))
                ch -= dayMilli
            }
            idx = jsons[i]['time']['changeArray'].length
            let last = Math.max(0,idx-30)
            for(let j = 0; j < last; j++) {
                jsons[i]['time']['changeArray'].shift()
            }

            jsons[i]['time']['changeDay'] = diff
            changes.push(i)
        }
        else if(jsons[i]['configs']['isOn']) {
            let idx = jsons[i]['time']['changeArray'].length;
            if(idx == 0) {
                jsons[i]['time']['changeArray'].push(0)
            }
            jsons[i]['time']['changeArray'] += dNow - jsons[i]['time']['lastChange']
            changes.push(i)
        }
        jsons[i]['time']['lastChange'] = dNow;
    }
    for(i = 0; i < changes.length; i++) {
        setObjectParam(Number(changes[i]).toString(), 'time', jsons[changes[i]]['time'])
    }
    jsons.sort((a,b) => {
        return ( b['time']['changeArray'].reduce((pr,lc) => pr + lc) - 
                    a['time']['changeArray'].reduce((pr,lc) => pr + lc) );
    });
    let last = Math.min(jsons.length, 5)
    for(i = 0; i < last; i++) {
        best.push(jsons[i])
    }
    return await genInfoPair(best)
}

export default function DiagnosisPage({navigation}) {
    const [elements, setState] = useState([null,null])
    readAndUpdate().then((response) => {
        setState(response)
    })

    return (
    <>
        <Header navigation={navigation}/>
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.button_grid}>
                <Text style={styles.txt}>Quantidade de dias que os aparelhos ficaram ligados</Text>
                <View>
                    {elements[1]}
                </View>
            </View>
            <View style={styles.dev_names}>
                <Text>SHOOS</Text>
                <View>
                    {elements[0]}
                </View>
            </View>
        </View>
        <TaskBar navigation={navigation}/>
    </>
    );
}