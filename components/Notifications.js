import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notification = () => {
  const [jwToken, setJwtoken] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)

  console.log({jwToken})

  useEffect(() => {
    (async() => {
      getData('jwtToken')
    })()
    if (jwToken) {
      console.log({ jwToken })
      setAuthenticated(true)
    } else {
      console.log("not authneticated")
      setAuthenticated(false)
    }
  }, [])
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('jwtToken')
      setJwtoken(value)

    } catch (e) {

    }
  }

  console.log({ jwToken })
  console.log({ authenticated })

  return (
    <View style={styles.container}>
      {

        authenticated ? (
          <View style={styles.button_create_account}>
            <Text style={styles.buttonText}>You can view this page</Text>
          </View>
        ) : (
          <View style={styles.button_create_account}>
            <Text style={styles.buttonText}>Login first to get into this page</Text>
          </View>
        )
      }

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e90ff',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  gif: {
    width: '20%',
    height: '20%',
    marginLeft: 140
  },
  webview: {
    flex: 1,
  },
});


export default Notification;
