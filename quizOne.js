import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View, TextInput, Image, Button, Pressable, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Answer from './answer'




const Stack = createNativeStackNavigator();
const KEY = '@answerKey';
let pointer = 0
const answerHolder = {
    question1:'',
    question2:'',
    question3:'',
    question4:''
};

const template ={
    question1:'',
    question2:'',
    question3:'',
    question4:''
};

const getData = async () => {
    try {
      const question1 = await AsyncStorage.getItem('question1')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
  




 //USE DATABASE TO STORE WRONG AND RIGHT QUESTIONS

export default function quizOne({navigation}){
    
    
   
  
    return(
        <View>
            <Button title="Click" onPress={()=>navigation.navigate('EHquestion1')}/>
        </View>
    )
  
}

const options={
    title: 'Question 2',
    headerTitleStyle:{
       fontWeight:'bold',
    },
    headerBackVisible:false
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