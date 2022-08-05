import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, ImageBackground, TextInput, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function HomeScreen({navigation}) {
    return (
        
      <View style={pageStyle}>
        <Text style={introStyle}>EXPLORE   ETHIOPIA</Text>
        <Button
        color= "#000"
        title='Start'
        onPress={() => navigation.navigate('Quiz')}
        />
        
      </View>
      
    );
  }


  const pageStyle = {
    flex:1,
    alignItems: 'center', 
    justifyContent: 'space-around' ,
    backgroundColor:'lightblue',
    flexDirection:'column',
    fontFamily:'cursive'
  }
  
  const introStyle ={
     fontSize:30,
  }