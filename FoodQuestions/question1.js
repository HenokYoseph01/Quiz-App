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

export default function question1({navigation}){
    
    const [answer,setAnswer] = useState(answerHolder);
    return(
        <View style={styles.container}>
        <Text style={{fontSize:30}}>ETHIOPIAN FOODS</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>What is the staple food of Ethiopia called?</Text>

        <View style={{paddingTop:30}}>
           <Pressable  onPress={()=>{setAnswer(answer.question1='Chapati'); answerHolder.question1=answer.question1; navigation.navigate("Fquestion2",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>A. Chapati</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question1='KusKus'); answerHolder.question1=answer.question1; navigation.navigate("Fquestion2",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>B. KusKus</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>
                {pointer++; setAnswer(answer.question1 = 'Injera'); 
                answerHolder.question1 = answer.question1;
                navigation.navigate("Fquestion2",{answers: answerHolder, points:pointer}) }}>
               <Text style={styles.button}>C. Injera</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question1='Jolof'); answerHolder.question1=answer.question1; navigation.navigate("Fquestion2",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}><Text>D.</Text> Jolof</Text>
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