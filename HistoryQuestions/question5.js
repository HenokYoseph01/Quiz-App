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
    const [answer,setAnswer] = useState(answerHolder);
    const{answers,points} = route.params;
    answerHolder.question1 = answers.question1;
    answerHolder.question2 = answers.question2;
    answerHolder.question3 = answers.question3;
    answerHolder.question4 = answers.question4;
    pointer = points;

    return(
        <View style={styles.container}>
        <Text style={{fontSize:30}}>ETHIOPIAN HISTORY</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>The name of the first Italio-Ethiopian war is known as the Battle of ____</Text>

        <View style={{paddingTop:30}}>
           <Pressable onPress={()=>{setAnswer(answer.question5='Abay'); answerHolder.question5=answer.question5; navigation.navigate("Score",{answers: answerHolder, points:pointer,section:"Ethiopian History"})}}           
           >
               <Text style={styles.button}>A. Abay</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question5='Axum'); answerHolder.question5=answer.question5; navigation.navigate("Score",{answers: answerHolder, points:pointer, section:"Ethiopian History"})}}>
               <Text style={styles.button}>B. Axum</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question5='Adwa'); pointer++; answerHolder.question5=answer.question5; navigation.navigate("Score",{answers: answerHolder, points:pointer, section:"Ethiopian History"})}}>
               <Text style={styles.button}>C. Adwa</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question5='Gonder'); answerHolder.question5=answer.question5; navigation.navigate("Score",{answers: answerHolder, points:pointer, section:"Ethiopian History"})}}>
               <Text style={styles.button}>D. Gonder</Text>
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