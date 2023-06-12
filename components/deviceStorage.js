import {AsyncStorage} from "react-native";

const deviceStorage = {
    async saveItem(key, value) {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
      async loadJWT() {
        try {
          const value = await AsyncStorage.getItem('jwtToken');

          console.log("tyoken " , {value})
          // if (value !== null) {
          //   this.setState({
          //     jwt: value,
          //     loading: false
          //   });
          // } else {
          //   this.setState({
          //     loading: false
          //   });
          // }
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
}


export const setData = async (key,item) => {
  let value = JSON.stringify(item)
  if(value) {
    AsyncStorage.setItem(key, value)
  }
}

export const getData = async (key, callback = (response) => {}) => {
  AsyncStorage.getItem(key)
  .then((value) => {
    callback(value)
    console
  })
}

export const getData1 = async (key) => {
  let keyStored = await AsyncStorage.getItem(key)
  return keyStored
}