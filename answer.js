import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View, TextInput, Image, Button, Pressable, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function answer({navigation,route}){
    const {answers,points,section,example} = route.params;   
    const [key1,setKey1] = useState('');
    const [key2,setKey2] = useState('');
    const [key3,setKey3] = useState('');
    const [key4,setKey4] = useState('');
    const [key5,setKey5] = useState(''); 
    const outcome = ()=>{
        if(points==0||points == 1){
            return 'Better Luck Next Time';
        }if(points==2){
            return 'Good Job'
        }if(points == 3 || points==4){
            return 'Very Good'
        }if(points == 5){
            return 'Excellent'
        }
    }   

    const color = ()=>{
        if(section==="Famous People"){
            setKey1('Tilahun Gessesse');
            setKey2('Abiy Ahmed');
            setKey3('Henok Haile');
            setKey4('Teddy Afro');
            setKey5('Haddis Alemayehu');
        }
        if(section==="Ethiopian Foods"){
            setKey1('Injera');
            setKey2('Doro Wet');
            setKey3('Ethiopian Mustrard');
            setKey4('Mitmita');
            setKey5('Buna');
        }
        if(section === "Ethiopian History"){
            setKey1('Axum');
            setKey2('Lij Eyasu');
            setKey3('Eritrea');
            setKey4('Italy');
            setKey5('Adwa');
        }
    }

    useEffect(()=>{
        color();
        
    })
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize:40}}>YOU HAVE SCORED</Text>
            <Text style={{fontSize:30}}>{points}/5</Text>
            <Text style={{fontSize:30}}>{outcome()}</Text>
            <Text style={{paddingTop:20, fontSize:30}}> Your Answers:</Text>
            <Text style={{fontSize:18,color:answers.question1===key1?'green':'red'}}>Question 1: {answers.question1}</Text>
            <Text style={{fontSize:18,color:answers.question2===key2?'green':'red'}}>Question 2: {answers.question2}</Text>
            <Text style={{fontSize:18,color:answers.question3===key3?'green':'red'}}>Question 3: {answers.question3}</Text>
            <Text style={{fontSize:18,color:answers.question4===key4?'green':'red'}}>Question 4: {answers.question4}</Text>
            <Text style={{fontSize:18,color:answers.question5===key5?'green':'red'}}>Question 5: {answers.question5}</Text>
            <View style={{paddingTop:100, justifyContent:'flex-start'}}>
                <Pressable>
                    <Button title="Check Answers" onPress={()=>navigation.navigate("Answer",{section:section,points:points, answers:answers})}/>
                </Pressable>
                <Pressable style={{paddingTop:10}}>
                    <Button title="Back to Quiz Selection" onPress={()=>navigation.navigate('Quiz')}/>
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