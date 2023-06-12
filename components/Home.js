import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './settings';
import Login from './Login';
import Notifications from './Notifications';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Ionicons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UobsWeb from './uobsWeb';


const Tab = createBottomTabNavigator();


function App() {

  const [jwToken, setJwtoken] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if(jwToken) setAuthenticated(true)
    else setAuthenticated(false)
  },[])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('jwtToken')
      setJwtoken(value)

    } catch(e) {
  
    }
  }

  console.log({authenticated})

  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
         headerShown: false // hide the top title bar
        }} >
        <Tab.Screen name="Home" component={Login} 
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <Ionicons name = 'home-outline' size = {30} color = {'#0099FF'} /> 
            )
          }
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} 
                options={{
                  tabBarIcon: ({focused})=>{
                    return(
                      <Ionicons name = 'settings-outline' size = {30} color = {'#0099FF'} /> 
                    )
                  }
                }} />
                
        <Tab.Screen name="Notification" component={ UobsWeb } 
                options={{
                  tabBarIcon: ({focused})=>{
                    return(
                      <Ionicons name = 'notifications-outline' size = {30} color = {'#0099FF'} /> 
                    )
                  }
                }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
