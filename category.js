import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CategoryScreen({navigation}) {
    return (
      <View style={pageStyle} {...{flex:1}}>
       
        <View>
  
            <View style={{marginBottom:10}}>
              <Button color="#000" title='Ethiopian History' onPress={()=>navigation.navigate('EHquestion1')} />
            </View>
  
            <View style={{marginBottom:10}}>
              <Button color="#000" title='Ethiopian Food' onPress={()=>navigation.navigate('Fquestion1')}/>
            </View>
  
            <View style={{marginBottom:10}}>
              <Button color="#000" title='Ethiopian Famous People' onPress={()=>navigation.navigate('FPquestion1')} />
            </View>
  
            <View style={{marginTop:180}}>
              <Button color="#000" title='Go back to home'  onPress={()=>navigation.popToTop()}/>
            </View>
  
            
            
        </View>
      </View>
    );
  }
  
  
 const pageStyle = {
    flex:1,
    alignItems: 'center', 
    justifyContent: 'space-around' ,
    backgroundColor:'lightblue',
    flexDirection:'column'
  }
  
  const introStyle ={
     fontSize:30,
  }
