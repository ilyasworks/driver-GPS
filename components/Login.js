import auth from "@react-native-firebase/auth";
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, Alert, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, email, password } from 'react-native';
import CreateAccount from './CreateAccount';
import StackBusInfo from './GetBusInfo';
import { updateCurrentLocation } from './utils/saveLocation';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [userCreds, setUserCreds] = useState([])
  const [authenticated, setAuthenticated] = useState(false)

  const signOutUser = async () => {
    try {
      console.log("lougt")
      auth().signOut()
      .then(() =>console.log("loguout hogya"))

      removeValue()
      setAuthenticated(false)

    } catch (e) {
        console.log(e);
    }
  }

  function getEmail(tex) {
    setUserCreds({ ...userCreds, identifier: tex })
  }

  function getPassword(pswd) {
    setUserCreds({ ...userCreds, password: pswd })
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            updateCurrentLocation();
          }
        })
        .catch(error => console.log('Error requesting location permission:', error));
    }

    return () => {

    };
  }, []);


  return (
    <>
     {
      authenticated ?
        <View>
          <Text>Hello You are already logged In!!</Text>
          <TouchableOpacity style={styles.button}  onPress={signOutUser}>
            <Text style={styles.buttonText} >Logout</Text>
          </TouchableOpacity>
          {/* <HelloWorld /> */}
        </View>
        : 
        <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/background.png')}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.welcome_Note}> WELCOME</Text>
          <Text style={styles.center_text}> to</Text>
          <Text style={styles.tag_line}> UOBS GPS</Text>
          <TextInput
            name="email"
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(txt) => getEmail(txt)}
          />
          <TextInput
            style={styles.input}
            name="password"
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={(txt) => getPassword(txt)}

          />
    
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')} >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.forget_password}> Forget Password</Text>
          </View>

          <View style={styles.button_create_account}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Create_Account')}>
              <Text style={styles.buttonText}>Rigister Bus</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
      }
    </>
  )
}

function Login() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false // hide the top title bar
     }} >
      <Stack.Screen name="Homescreen" component={HomeScreen} />
      <Stack.Screen name="Details" component={StackBusInfo} />
      <Stack.Screen name="Create_Account" component={CreateAccount} />
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
  logo: {
    width: 80,
    height: 80,
  },
  welcome_Note: {
    paddingBottom: 0,
    fontWeight: 'bold',
    fontSize: 30,
    color: "orange",
    color: '#1e90ff'

  },
  tag_line: {
    paddingBottom: 50,
    fontSize: 20,
    color: '#808080'
  },
  center_text: {
    padding: 10,
    fontSize: 20,
    color: '#808080'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  button_create_account: {
    paddingTop: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forget_password: {
    paddingTop: 10,
    color: '#1e90ff'
  }
});


export default Login;
