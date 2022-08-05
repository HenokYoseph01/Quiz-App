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

export default function question1({navigation}){
    
    const [answer,setAnswer] = useState(answerHolder);
    return(
        <View style={styles.container}>
        <Text style={{fontSize:30}}>FAMOUS PEOPLE</Text>
        <Text style={{paddingTop: 20, fontSize:20}}>Who is this person?</Text>
        <Image source={require('../pics/TilahunGessesse.jpg')} style={{width:300, height:300}}/>
        <ScrollView>
        <View style={{paddingTop:30}}>
           <Pressable  onPress={()=>{setAnswer(answer.question1='Mahmoud Ahmed'); answerHolder.question1=answer.question1; navigation.navigate("FPquestion2",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>A. Mahmoud Ahmed</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{pointer++; setAnswer(answer.question1='Tilahun Gessesse'); answerHolder.question1=answer.question1; navigation.navigate("FPquestion2",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}>B. Tilahun Gessesse</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>
                {setAnswer(answer.question1 = 'Bob Kenty'); 
                answerHolder.question1 = answer.question1;
                navigation.navigate("FPquestion2",{answers: answerHolder, points:pointer}) }}>
               <Text style={styles.button}>C. Bob Kenty</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:30}}>
        <Pressable onPress={()=>{setAnswer(answer.question1='Mulatu Astatke'); answerHolder.question1=answer.question1; navigation.navigate("FPquestion2",{answers: answerHolder, points:pointer})}}>
               <Text style={styles.button}><Text>D.</Text> Mulatu Astatke</Text>
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
    flexCont:{
        justifyContent:'flex-start'
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