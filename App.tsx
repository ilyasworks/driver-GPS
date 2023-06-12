import React, {useEffect} from 'react';
// import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Home from './components/Home';
import SplashScreen from 'react-native-splash-screen';



export default function App() {
  useEffect(() => {
    SplashScreen.hide();

  }, []);
  
  return(
  <SafeAreaView style={{flex: 1}}>
  <Home/>
</SafeAreaView>
  )
}


