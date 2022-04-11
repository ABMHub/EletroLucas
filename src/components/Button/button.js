import { BackArrow, RightArrow, Banheiro } from '../../../assets/svg.js';
import styles from "./styles.js"
import React from 'react';

import { VERTICAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import { Text, View, StyleSheet, Pressable, Image, TouchableOpacity} from 'react-native';


export default function Button(props) {
  const {onPress, title, id} = props;
  return (
    <View style={styles.button_div}>
      <Pressable style={styles.button} onPress={onPress}>
        <Banheiro height={"70%"} width={"70%"} id={id}/>
        <View><Text style={{textAlign:'center'}}>{title}</Text></View>
      </Pressable>
    </View>
  );
}

export function BackButton({onPress}) {
  return (
    <View>
      <Pressable onPress={onPress}>
        <BackArrow height={32} width={32}/>
      </Pressable>
    </View>
  );
}

export function FinishButton({onPress}) {
  return (
    <View>
      <Pressable style={styles.finishButton} onPress={onPress}>
        <Text style={{fontSize: 20, color: "white", fontWeight: '700'}}> Finalizar </Text>
      </Pressable>
    </View>
  );
}

export function ImageButton(props) {
  const {onPress, source} = props;
  return (
      <Pressable style={styles.img_button} onPress={onPress}>
        <Image source={source}></Image>
      </Pressable>
  );
}

export function SvgButton(props) {
  const {onPress, svg} = props;
  return (
      <Pressable style={styles.svg_button} onPress={onPress}>
        {svg}
      </Pressable>
  );

}

export function SvgTxtButton(props) {
  const {onPress, id, text} = props;
  return (
    <View style={{padding: 10}}>
 
      <TouchableOpacity style={styles.TxtButtonStyle} onPress={onPress}>
         <Text style={styles.TextStyle}> {text} </Text>   
         
         <View style={{height:'100%', aspectRatio:1}}>
           <Banheiro  id={id}/>  
         </View>
         
      </TouchableOpacity>
    </View>
  )

}

export function ConfirmButton(props) {
  const {onPress, id=-1, text} = props;
  return (
    <View style={{flexDirection: 'row'}}>
 
      <TouchableOpacity style={styles.confirmStyle} onPress={onPress}>
         <Text style={styles.TextStyle}> {text} </Text>   
         
         <View style={{height:'100%', aspectRatio:1}}>
           <Banheiro style={{aspectRatio:1}} height={'100%'} id={id}/>  
         </View>
         
      </TouchableOpacity>
    </View>
  )
}

export function CloseButton(props) {
  const {onPress, id} = props;
  return (
    <View style={styles.closeStyle}>
      <TouchableOpacity onPress={onPress}>
         <View>
           <Banheiro style={{aspectRatio:1}} height={30} id={id}/>  
         </View>
      </TouchableOpacity>
    </View>
  )
}

export function SelectDeviceButton({text, onPress, textStyle}){
  return (
    <View style={{padding: 10}}>
      <TouchableOpacity style={styles.selectDeviceButtonStyle} onPress={onPress}>
        <Text style={textStyle}> {text} </Text>     
        <View style={{height:'100%', aspectRatio:1}}>
          <RightArrow height={"100%"} width={"100%"}/>  
        </View>         
      </TouchableOpacity>
    </View>
  )
}