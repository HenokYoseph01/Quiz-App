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
        <Text style={{fontSize:30}}>ETHIOPIAN FOODS </Text>
        <Text style={{paddingTop: 20, fontSize:20}}>Which Ethiopian Food Consists Of 99% Onions?</Text>

        <View style={{paddingTop:30}}>
           <Pressable onPress={()=>{setAnswer(answer.question2='Tihlo'); answerHolder.question2=answer.question2; navigation.navigate("Fquestion3",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>A. Tihlo</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>
            {pointer++; 
             setAnswer(answer.question2 = 'Doro Wet');
             answerHolder.question2 = answer.question2;
            navigation.navigate("Fquestion3",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button} >B. Doro Wet</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question2='Bula'); answerHolder.question2=answer.question2; navigation.navigate("Fquestion3",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>C. Bula </Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question2='Genfo'); answerHolder.question2=answer.question2; navigation.navigate("Fquestion3",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>D. Genfo</Text>
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