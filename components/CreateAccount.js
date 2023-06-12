import { useState } from "react";
import { Text, View, ImageBackground, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 
import auth from "@react-native-firebase/auth";
import Login from "./Login";

const Stack = createStackNavigator();

function CreateAccount( { navigation } ) {

  const [userCredentials, setUsercredentials] = useState({})

  function handleChange (value, fieldName) {
    setUsercredentials({...userCredentials, [fieldName]: value})
  }

  const registration = async (e) => {
    e.preventDefault()
    try {
      let response = await auth().createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
      if(response) {
        Alert.alert(
          'Success',
          'your account Successfuly Created',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('login'),
            },
          ],
          { cancelable: false }
        );
      }
    } catch(error) { 
      console.error("Error : ", error.message) 
    } 
  }

  return (
    <ImageBackground
      style={styles.backgroundImage} 
      source={require('../assets/background.png')}>
      <View style={styles.container}>
        <Text style={styles.welcome_Note}> SIGN UP</Text>

        <Text style={styles.LableText}> Driver Name* </Text>
        <TextInput
          style={styles.input}
          placeholder="Muhammad Ilyas"
          name="name"  
          onChangeText={(txt) => handleChange(txt, "username")}
        />
        
        <Text style={styles.LableText}> Email* </Text>
        <TextInput
          style={styles.input}
          placeholder="ilyas@gmail.com"
          name="email"
           onChangeText={(txt) => handleChange(txt, "email")}
        />
        <Text style={styles.LableText}>Bus Number* </Text>
        <TextInput
          style={styles.input}
          placeholder="Are you Student or Driver?"
          name="occupation"
           onChangeText={(txt) => handleChange(txt, "occupation")}
        />

        <Text style={styles.LableText}> Set Password* </Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          name="password"
           onChangeText={(txt) => handleChange(txt, "password")}
          secureTextEntry
        />
        <View style={styles.button_create_account}>
          <TouchableOpacity style={styles.button} onPress={registration}>
            <Text style={styles.buttonText}>Rigister</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.forget_password}> Already Have an Account</Text>
        </View>

      </View>
    </ImageBackground>
  );
}

function StackLogin() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false // hide the top title bar
     }} >
      <Stack.Screen name="createaccount" component={CreateAccount} />
      <Stack.Screen name="login" component={Login}/>
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
  welcome_Note: {
    paddingBottom: 0,
    fontWeight: 'bold',
    fontSize: 30,
    color: "orange",
    color: '#1e90ff'

  },
  LableText: {
    width: '80%',
    paddingBottom: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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

export default StackLogin;