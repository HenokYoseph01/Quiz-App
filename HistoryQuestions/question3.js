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

export default function ({navigation,route}){
    const [answer,setAnswer] = useState(answerHolder)
    const{answers,points} = route.params;
    answerHolder.question1 = answers.question1;
    answerHolder.question2 = answers.question2;
    pointer = points;

    return(
        <View style={styles.container}>
        <Text style={{fontSize:30}}>ETHIOPIAN HISTORY</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>Which country separated from Ethiopia in 1993?</Text>
        
        <View style={{paddingTop:30}}>
           <Pressable onPress={()=>{setAnswer(answer.question3='Eritrea'); pointer++; answerHolder.question3=answer.question3; navigation.navigate("EHquestion4",{answers: answerHolder, points:pointer})}}           
           >
               <Text style={styles.button}>A. Eritrea</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question3='Sudan'); answerHolder.question3=answer.question3; navigation.navigate("EHquestion4",{answers: answerHolder, points:pointer})}} >
               <Text style={styles.button}>B. Sudan</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question3='Kenya'); answerHolder.question3=answer.question3; navigation.navigate("EHquestion4",{answers: answerHolder, points:pointer})}} >
               <Text style={styles.button}>C. Kenya</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question3='Djibouti'); answerHolder.question3=answer.question3; navigation.navigate("EHquestion4",{answers: answerHolder, points:pointer})}} >
               <Text style={styles.button}>D. Djibouti</Text>
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