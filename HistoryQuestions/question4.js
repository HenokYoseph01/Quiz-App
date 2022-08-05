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
        <Text style={{fontSize:30}}>ETHIOPIAN HISTORY</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>Which Country Invaded Ethiopia in 1935?</Text>

        <View style={{paddingTop:30}}>
           <Pressable onPress={()=>{setAnswer(answer.question4='England'); answerHolder.question4=answer.question4; navigation.navigate("EHquestion5",{answers: answerHolder, points:pointer})}}           
           >
               <Text style={styles.button}>A. England</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question4='France'); answerHolder.question4=answer.question4; navigation.navigate("EHquestion5",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>B. France</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{pointer++;setAnswer(answer.question4='Italy'); answerHolder.question4=answer.question4; navigation.navigate("EHquestion5",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>C. Italy</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question4='Belgium'); answerHolder.question4=answer.question4; navigation.navigate("EHquestion5",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>D. Belgium</Text>
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