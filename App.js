import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View, ImageBackground, Image, Button, TouchableOpacity, Pressable} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QuizOne from './quizOne'
import Category from './category'
import Fquestion1 from './FoodQuestions/question1'
import Fquestion2 from './FoodQuestions/question2'
import Fquestion3 from './FoodQuestions/question3'
import Fquestion4 from './FoodQuestions/question4'
import Fquestion5 from './FoodQuestions/question5'
import FPquestion1 from './FamousPeople/question1'
import FPquestion2 from './FamousPeople/question2'
import FPquestion3 from './FamousPeople/question3'
import FPquestion4 from './FamousPeople/question4'
import FPquestion5 from './FamousPeople/question5'
import EHquestion1 from './HistoryQuestions/question1'
import EHquestion2 from './HistoryQuestions/question2'
import EHquestion3 from './HistoryQuestions/question3'
import EHquestion4 from './HistoryQuestions/question4'
import EHquestion5 from './HistoryQuestions/question5'
import Answer from './answer'
import Check from './Check'
import Home from './home'



const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ADD8E6'
  },
};




export default function App(){
  
  return(
    
    <NavigationContainer theme={MyTheme}>
      
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home}/>
        <Stack.Screen name="Quiz" component={Category}/>
        <Stack.Screen name="FPquestion1" component ={FPquestion1} options={{title: "Question 1"}}/>
        <Stack.Screen name="FPquestion2" component ={FPquestion2} options={{title: "Question 2",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="FPquestion3" component ={FPquestion3} options={{title: "Question 3",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="FPquestion4" component ={FPquestion4} options={{title: "Question 4",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="FPquestion5" component ={FPquestion5} options={{title: "Question 5",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="Fquestion1" component ={Fquestion1} options={{title: "Question 1"}}/>
        <Stack.Screen name="Fquestion2" component ={Fquestion2} options={{title: "Question 2",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="Fquestion3" component ={Fquestion3} options={{title: "Question 3",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="Fquestion4" component ={Fquestion4} options={{title: "Question 4",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="Fquestion5" component ={Fquestion5} options={{title: "Question 5",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="EHquestion1" component ={EHquestion1} options={{title: "Question 1"}}/>
        <Stack.Screen name="EHquestion2" component ={EHquestion2} options={{title: "Question 2",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="EHquestion3" component ={EHquestion3} options={{title: "Question 3",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="EHquestion4" component ={EHquestion4} options={{title: "Question 4",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="EHquestion5" component ={EHquestion5} options={{title: "Question 5",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="Score" component ={Answer} options={{title: "Score",headerTitleStyle:{fontWeight:'bold',},headerBackVisible:false}}/>
        <Stack.Screen name="Answer" component ={Check} />
        
      </Stack.Navigator>
    </NavigationContainer> 
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