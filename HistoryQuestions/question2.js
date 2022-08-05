import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View, TextInput, Image, Button, Pressable, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const answerHolder = {
    question1:'', 
    question2:'', 
    question3:'',
    question4:'',
    question5:'',
};

let pointer = 0; 

export default function question2 ({navigation,route}){
    const [answer,setAnswer] = useState(answerHolder);
    const{answers,points} = route.params;
    answerHolder.question1 = answers.question1;
    pointer = points;

    return(
        <View style={styles.container}>
        <Text style={{fontSize:30}}>ETHIOPIAN HISTORY</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>Who was the first leader of Ethiopia?</Text>

        <View style={{paddingTop:30}}>
           <Pressable onPress={()=>{pointer++;setAnswer(answer.question2='Lij Eyasu'); answerHolder.question2=answer.question2; navigation.navigate("EHquestion3",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>A. Lij Eyasu</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>
            { 
             setAnswer(answer.question2 = 'Haileselassie');
             answerHolder.question2 = answer.question2;
            navigation.navigate("EHquestion3",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button} >B. Haileselassie (Ras Teferi)</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question2='Meles Zenawi'); answerHolder.question2=answer.question2; navigation.navigate("EHquestion3",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>C. Meles Zenawi </Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question2='Mengistu Hailemaeiam'); answerHolder.question2=answer.question2; navigation.navigate("EHquestion3",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>D. Teddy Afro</Text>
           </Pressable>  
        </View>
    </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50,

    },

    button:{
        fontSize: 30
    }
  });