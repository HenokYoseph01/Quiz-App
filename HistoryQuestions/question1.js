import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View, TextInput, Image, Button, Pressable, ScrollView} from 'react-native';
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

export default function question1({navigation}){
    
    const [answer,setAnswer] = useState(answerHolder);
    return(
        <View style={styles.container}>
        <Text style={{fontSize:30}}>ETHIOPIAN HISTORY</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>What was the first major kingdom in Ethiopia?</Text>
        <View style={{paddingTop:30}}>
           <Pressable  onPress={()=>{setAnswer(answer.question1='Dmt'); answerHolder.question1=answer.question1; navigation.navigate("EHquestion2",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>A.D'mt</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question1='The Kingdom of Ethiopia'); answerHolder.question1=answer.question1; navigation.navigate("EHQuestion2",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>B. The Kingdom of Ethiopia</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>
                {setAnswer(answer.question1 = 'The Federal Democratic Republic of Ethiopia'); 
                answerHolder.question1 = answer.question1;
                navigation.navigate("EHquestion2",{answers: answerHolder, points:pointer}) }}>
               <Text style={styles.button}>C. The Federal Democratic Republic of Ethiopia</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{pointer++;setAnswer(answer.question1='Axum'); answerHolder.question1=answer.question1; navigation.navigate("EHquestion2",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}><Text>D.</Text>Axum</Text>
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
        fontSize: 30,
    },

    text:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    }
  });