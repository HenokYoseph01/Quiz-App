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
        <Text style={{fontSize:30}}>FAMOUS PEOPLE</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>Who is this person?</Text>
        <Image source={require('../pics/hh.jpg')} style={{width:300, height:300}}/>
        <ScrollView>
        <View style={{paddingTop:30}}>
           <Pressable onPress={()=>{setAnswer(answer.question3='Henok Haile'); pointer++; answerHolder.question3=answer.question3; navigation.navigate("FPquestion4",{answers: answerHolder, points:pointer})}}           
           >
               <Text style={styles.button}>A. Henok Haile</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question3='Mihret Ab'); answerHolder.question3=answer.question3; navigation.navigate("FPquestion4",{answers: answerHolder, points:pointer})}} >
               <Text style={styles.button}>B. Mihret Ab</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question3='Marcus Samulesson'); answerHolder.question3=answer.question3; navigation.navigate("FPquestion4",{answers: answerHolder, points:pointer})}} >
               <Text style={styles.button}>C. Marcus Samulesson</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question3='Abebe Melaku'); answerHolder.question3=answer.question3; navigation.navigate("FPquestion4",{answers: answerHolder, points:pointer})}} >
               <Text style={styles.button}>D.Abebe Melaku </Text>
           </Pressable>  
        </View>
        </ScrollView>
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