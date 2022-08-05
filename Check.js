import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View, TextInput, Image, Button, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
 




export default function check({navigation,route}){

   
    
    const {section,points,answers} = route.params;
    const [q1,setQ1] = useState('');
    const [q2,setQ2] = useState('');
    const [q3,setQ3] = useState('');
    const [q4,setQ4] = useState('');
    const [q5,setQ5] = useState('');
    const [key1,setKey1] = useState('');
    const [key2,setKey2] = useState('');
    const [key3,setKey3] = useState('');
    const [key4,setKey4] = useState('');
    const [key5,setKey5] = useState('');
    const [url1,setUrl1] = useState('');
    const [url2,setUrl2] = useState('');
    const [url3,setUrl3] = useState('');
    const [url4,setUrl4] = useState('');
    const [url5,setUrl5] = useState('');
    const [check, setCheck] = useState('');
   
    const keysN = ()=>{
        if(section==="Ethiopian Foods"){
            setKey1('FQ1');
            setKey2('FQ2');
            setKey3('FQ3');
            setKey4('FQ4');
            setKey5('FQ5');
            setUrl1('https://en.wikipedia.org/wiki/Injera')
            setUrl2('https://www.masterclass.com/articles/doro-wat-recipe')
            setUrl3('www.google.com')
            setUrl4('https://en.wikipedia.org/wiki/Mitmita')
            setUrl5('https://news.medill.northwestern.edu/chicago/buna-the-art-of-making-ethiopian-coffee/')
        }
        if(section === "Famous People"){
            setKey1('FPQ1');
            setKey2('FPQ2');
            setKey3('FPQ3');
            setKey4('FPQ4');
            setKey5('FPQ5');

            setUrl1('https://en.wikipedia.org/wiki/Tilahun_Gessesse')
            setUrl2('https://en.wikipedia.org/wiki/Abiy_Ahmed')
            setUrl3('https://www.instagram.com/henok.haile/?hl=en')
            setUrl4('https://en.wikipedia.org/wiki/Teddy_Afro')
            setUrl5('https://en.wikipedia.org/wiki/Haddis_Alemayehu')
        }
        if(section === "Ethiopian History"){
            setKey1('EHQ1');
            setKey2('EHQ2');
            setKey3('EHQ3');
            setKey4('EHQ4');
            setKey5('EHQ5');

            setUrl1('https://en.wikipedia.org/wiki/Axum')
            setUrl2('https://en.wikipedia.org/wiki/Lij_Iyasu')
            setUrl3('https://en.wikipedia.org/wiki/Eritrea')
            setUrl4('https://www.britannica.com/event/Italo-Ethiopian-War-1935-1936')
            setUrl5('https://en.wikipedia.org/wiki/Battle_of_Adwa')
        }
    }
    
  
    const storeData = async()=>{
        try{
        await AsyncStorage.setItem('FQ1',"The staple food of Ethiopia is Injera");
        await AsyncStorage.setItem('FQ2',"Doro wot is the food consisitng of 99% onions");
        await AsyncStorage.setItem('FQ3',"Senafinch is an Ethiopian Mustard");
        await AsyncStorage.setItem('FQ4',"The seasoning mix used in Ethiopian Cuisine is Mitmita");
        await AsyncStorage.setItem('FQ5',"Ethiopian Coffee is also known as Buna");
        await AsyncStorage.setItem('FPQ1',"The person in this picture is Tilahun Gesesse");
        await AsyncStorage.setItem('FPQ2',"The current prime minister of Ethiopia is Abiy Ahmed");
        await AsyncStorage.setItem('FPQ3',"The person in this picture is Henok Haile");
        await AsyncStorage.setItem('FPQ4',"Tikur Sew was released by Teddy Afro in 2012");
        await AsyncStorage.setItem('FPQ5',"Fikir Eske Mekabr was written by Haddis Alemayehu");
        await AsyncStorage.setItem('EHQ1',"The first major kingdom was the Kingdom of Axumit in Axum");
        await AsyncStorage.setItem('EHQ2',"The first leader of Ethiopia was Lij Eyasu");
        await AsyncStorage.setItem('EHQ3',"Eritrea was the country that separated from Ethiopia in 1993");
        await AsyncStorage.setItem('EHQ4',"Italy invaded Ethiopia in 1935");
        await AsyncStorage.setItem('EHQ5',"The first battle was known as the Battle of Adwa");
        }catch(err){
            alert(err)
        }
    }
    
    const loadData = async()=>{
        try{
           
            let q1 = await AsyncStorage.getItem(key1);
            let q2 = await AsyncStorage.getItem(key2);
            let q3 = await AsyncStorage.getItem(key3);
            let q4 = await AsyncStorage.getItem(key4);
            let q5 = await AsyncStorage.getItem(key5);

            if(q1!==null&&q2!==null&&q3!==null&&q4!==null&&q5!==null){
              setQ1(q1)             
              setQ2(q2)
              setQ3(q3)
              setQ4(q4)
              setQ5(q5)
            }
        }catch(err){
            alert(err);
           
        }
    }

    useEffect(()=>{
        storeData();
        keysN();
        loadData();
        setCheck(', check more here')
        
    })
   

    return(
       <View style={styles.container}>
           <Text style={{fontSize:50}}>Answers</Text>
           <Text style={{fontSize:40, paddingTop:20}}>{section}</Text>
           <Text style={{fontSize:20, paddingTop:20}}>Question 1: {q1} <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(url1)}>{check}</Text></Text>
           <Text style={{fontSize:20, paddingTop:20}}>Question 2: {q2} <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(url2)}>{check}</Text></Text>
           <Text style={{fontSize:20, paddingTop:20}}>Question 3: {q3} <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(url3)}>{check}</Text></Text>
           <Text style={{fontSize:20, paddingTop:20}}>Question 4: {q4} <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(url4)}>{check}</Text></Text>
           <Text style={{fontSize:20, paddingTop:20}}>Question 5: {q5} <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(url5)}>{check}</Text></Text>
          
           <View style={{flexDirection: 'row', paddingTop:30, alignItems:'stretch'}}>
           <Button title="Back" onPress={()=>navigation.navigate('Score',{section:section, points:points, answers:answers})}/><Text>      </Text>
           <Button title="Back to Selection" onPress={()=>navigation.navigate('Quiz')}/>
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