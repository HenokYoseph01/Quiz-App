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

export default function ({navigation,route}){
    const [answer,setAnswer] = useState(answerHolder)
    const{answers,points} = route.params;
    answerHolder.question1 = answers.question1;
    answerHolder.question2 = answers.question2;
    answerHolder.question3 = answers.question3;
    pointer = points;

    return(
        <View style={styles.container}>
        <Text style={{fontSize:30}}>FAMOUS PEOPLE</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>Who released an album by the name "Tikur Sew" in 2012</Text>

        <View style={{paddingTop:30}}>
           <Pressable onPress={()=>{setAnswer(answer.question4='Teddy Afro'); pointer++; answerHolder.question4=answer.question4; navigation.navigate("FPquestion5",{answers: answerHolder, points:pointer})}}           
           >
               <Text style={styles.button}>A. Teddy Afro</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question4='Aster Aweke'); answerHolder.question4=answer.question4; navigation.navigate("FPquestion5",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>B. Aster Aweke</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question4='Ali Birra'); answerHolder.question4=answer.question4; navigation.navigate("FPquestion5",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>C. Ali Birra</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question4='Rahel Getu'); answerHolder.question4=answer.question4; navigation.navigate("FPquestion5",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>D. Rahel Getu</Text>
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