import { Text, View} from 'react-native';
import Header,{TaskBar} from "../../components/Navbar/navbar";
import styles from "./styles";
import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import {getAllJson, setObjectParam} from "../../model/JsonFunction.js";
import { useIsFocused } from "@react-navigation/native";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function toTime(milliseconds) {
    milliseconds = Number(milliseconds)
    let timeScale = 'Millisegundos'
    if(milliseconds < 1000) {
        milliseconds = milliseconds
    }
    else if(milliseconds < 60*1000) {
        milliseconds = milliseconds/1000
        timeScale = 'Segundos'
    }
    else if(milliseconds < 60*60*1000) {
        milliseconds = milliseconds/(60*1000)
        timeScale = 'Minutos'
    }
    else if(milliseconds < 24*60*60*1000) {
        milliseconds = milliseconds/(60*60*1000)
        timeScale = 'Horas'
    }
    else {
        milliseconds = milliseconds/(24*60*60*1000)
        timeScale = 'Dias'
    }
    return Math.floor(milliseconds).toString() + ' ' + timeScale
}

async function genInfoPair(best) {
    let names = []
    let graphs = []
    if(best.length == 0) {
        return [null,null]
    }

    let hex = [
        "#FF0000",
        "#F9CF66",
        "#72EE7E",            
    ]
    let base = best[0]['time']['changeArray'].reduce((pr,lc) => pr+lc)
    let dvs = [
        Number(100)
    ]

    for(i = 1; i < best.length; i++) {
        let now = best[i]['time']['changeArray'].reduce((pr,lc) => pr + lc,0)
        if(now === 0){
            dvs.push(100)
        }
        else{
            dvs.push(
                Number(now/base)*100
            )
        }
    }
    let margTV = [13, 5, 3]
    for(i = 0; i < best.length; i++) {
        let nick = best[i]['Apelido'] == "" ? best[i]['Nome do dispositivo']: best[i]['Apelido']
        names.push(
            <View style={{flex: 1, flexDirection: 'row'}} key={`names${i}`}>
               <View style={{width:"8%", height:'100%',backgroundColor:hex[i]}}></View> 
               <Text style={{marginTop:`${margTV[best.length-1]}%`,marginLeft:'10%', color:hex[i], fontSize:15}}>{nick}</Text>
            </View>
        )    
    }
    let margB = best.length == 1 ? 190 : (best.length == 2 ? 205: 355);
    let margH = best.length == 1 ? 28 : 5;
    for(i = 0; i < best.length; i++) {
         
        graphs.push(
            <View key={`graphs${i}`} style={{flex:1, marginHorizontal: `${margH}%`}}>
                <Text style={graphTextStyle(dvs[i],hex[i], margB)}>{toTime(dvs[i]*base/100)}</Text>
                <View style={graphStyle(dvs[i], hex[i])}></View> 
            </View>
        )
    }
    return [names,graphs]
}

function graphTextStyle(lH,col, margB) {
    return {
        color: col,
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginBottom: `${margB*lH/100}%`,
    }
}

function graphStyle(lH, col) {
    return {
        height:`${0.85*lH}%`,
        
        backgroundColor:col,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        elevation: 3,
    }
}

export function updateTime(obj) {
    let dayMilli = 86400000
    let dNow = Date.now()
    let diff = Math.floor(dNow/dayMilli)
    let flag = false
    if(obj['time']['dayChange'] === 0){
        obj['time']['dayChange'] = diff;
        obj['time']['changeArray'].push(0)
        obj['time']['lastChange'] = dNow
        flag = true
    }
    else if(obj['time']['dayChange'] < diff) {
        let ch = 0
        let idx = obj['time']['changeArray'].length
        let hp = obj['time']['lastChange']
        hp = Math.ceil(hp/dayMilli)*dayMilli - hp 
        obj['time']['changeArray'][idx-1] += hp 

        if (obj['configs']['isOn']) {
            ch = dNow - obj['time']['lastChange'] - hp
        }
        for(let j = 1; j < diff - obj['time']['dayChange']; j++) {
            obj['time']['changeArray'].push(Math.min(ch,dayMilli))
            ch -= dayMilli
        }
        idx = obj['time']['changeArray'].length
        let last = Math.max(0,idx-30)
        for(let j = 0; j < last; j++) {
            obj['time']['changeArray'].shift()
        }
        obj['time']['dayChange'] = diff
        flag = true
    }
    else if(obj['configs']['isOn']) {
        let idx = obj['time']['changeArray'].length;
        obj['time']['changeArray'][idx-1] += dNow - obj['time']['lastChange']
        flag = true
    }
    obj['time']['lastChange'] = dNow;
    return [obj,flag]
}

async function readAndUpdate() {
    let best = []
    let jsons = await getAllJson()
    let changes = []
    
    for(let i = 0; i < jsons.length; i++){
        let res = updateTime(jsons[i])
        jsons[i] = res[0]
        if(res[1]) {
            changes.push(i)
        }
    }
    for(i = 0; i < changes.length; i++) {
        setObjectParam(jsons[changes[i]]['id'], 'time', jsons[changes[i]]['time'])
        console.log(Number(changes[i] + 1).toString(), 'time', jsons[changes[i]]['time'])
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
    const isFocused = useIsFocused();
    useEffect(() => {
        readAndUpdate().then((response) => {
            setState(response)
        })
    }, [isFocused])
    
    return (
    <>
        <Header navigation={navigation}/>
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.button_grid}>
                <Text style={styles.txt}>Quantidade de dias que os aparelhos ficaram ligados</Text>
                <View style={styles.graphs}>
                    {elements[1]}
                </View>
            </View>
            <View style={styles.dev_names}>
                {elements[0]}
            </View>
        </View>
        <TaskBar navigation={navigation}/>
    </>
    );
}