import React from 'react';
import { View, Text,Image, ImageBackground, TouchableOpacity,Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DeviceTracker from './deviceTracker';

const Stack = createStackNavigator();

function Businfo({ navigation }) {
  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('../assets/background.png')}>
    <View style={styles.container}>
    <Image style={styles.UserImage} source={require('../assets/ilyas.jpg')} />
     <Image style={styles.gif} source={require('../assets/Location.gif')} />
        <Text style={styles.EnableText}>Start Tracking</Text>
    </View>
    </ImageBackground>
  );
}


function StackBusInfo() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false // hide the top title bar
     }} >
      <Stack.Screen name="GetBusInfo" component={Businfo} />
      {/* <Stack.Screen name="location" component={Location} /> */}
      <Stack.Screen name="trackerDevice" component={DeviceTracker} />
    </Stack.Navigator>
  );
}



const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  UserImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 30,

  },
    gif: {
    width: 130,
    height: 130,
    // marginLeft: 50
  },
  Text_Heading: {
    paddingBottom: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: "gray",
  },
  EnableText: {
      paddingBottom: 0,
      textAlign: 'center',
      fontSize: 18,
      color: "gray",
      marginBottom: 18
    },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f2f2f2',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  button2: {
    width: '80%',
    height: 50,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  button_create_account:{
    paddingTop: 30,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



export default StackBusInfo;
