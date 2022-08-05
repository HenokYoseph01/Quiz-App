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
        <Text style={{fontSize:30}}>ETHIOPAN FOODS</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>___ is a powdered seasoning mix used in Ethiopian cuisine.</Text>

        <View style={{paddingTop:30}}>
           <Pressable onPress={()=>{setAnswer(answer.question4='Mitmita'); pointer++; answerHolder.question4=answer.question4; navigation.navigate("Fquestion5",{answers: answerHolder, points:pointer})}}           
           >
               <Text style={styles.button}>A. Mitmita</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question4='Tibs'); answerHolder.question4=answer.question4; navigation.navigate("Fquestion5",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>B. Tibs</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question4='Kinche'); answerHolder.question4=answer.question4; navigation.navigate("Fquestion5",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>C. Kinche</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question4='Ayb'); answerHolder.question4=answer.question4; navigation.navigate("Fquestion5",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>D. Ayb</Text>
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