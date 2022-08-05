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
    pointer = points;

    return(
        <View style={styles.container}>
        <Text style={{fontSize:30}}>ETHIOPIAN FOODS</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>What is senafitch?</Text>

        <View style={{paddingTop:30}}>
           <Pressable onPress={()=>{setAnswer(answer.question3='Ethiopian Mustrard'); pointer++; answerHolder.question3=answer.question3; navigation.navigate("Fquestion4",{answers: answerHolder, points:pointer})}}           
           >
               <Text style={styles.button}>A. Ethiopian Mustard</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question3='Type of Ethiopian Bread'); answerHolder.question3=answer.question3; navigation.navigate("Fquestion4",{answers: answerHolder, points:pointer})}} >
               <Text style={styles.button}>B. A type of Ethiopian Bread</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question3='Type of Vegitable'); answerHolder.question3=answer.question3; navigation.navigate("Fquestion4",{answers: answerHolder, points:pointer})}} >
               <Text style={styles.button}>C. A type of vegitable</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question3='Table'); answerHolder.question3=answer.question3; navigation.navigate("Fquestion4",{answers: answerHolder, points:pointer})}} >
               <Text style={styles.button}>D. A table</Text>
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