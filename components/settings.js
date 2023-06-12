import React from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { setEmail, email, } from "react-native";
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Query from './query';


const SucessAlertDelete = () => {
  Alert.alert(
    'Good',
    'Bus removed successfully!',
    [
      {
        text: 'OK',
        onPress: () => console.log('OK pressed'),
      },
    ],
    { cancelable: false }
  );
};
const SucessAlertAdd = () => {
  Alert.alert(
    'Good',
    'Bus added successfully!',
    [
      {
        text: 'OK',
        onPress: () => console.log('OK pressed'),
      },
    ],
    { cancelable: false }
  );
};
const Stack = createStackNavigator();

function Setting({ navigation }) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/background.png')}>
      <Query />
      <View style={styles.container}>
        <Text style={styles.NoteText}>NOTE! student can't add and remove bus</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.addAndRemoveBus} onPress={() => navigation.navigate('Add_Bus')}>
            <Text style={styles.addAndRemoveText}>Add Bus</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addAndRemoveBus} onPress={() => navigation.navigate('Delete_Bus')}>
            <Text style={styles.addAndRemoveText}>Remove Bus</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>

  );
}


function AddBus({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.LableText}> Bus Number* </Text>
      <TextInput
        style={styles.input}
        placeholder="UOBS323"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.LableText}>Road Number* </Text>
      <TextInput
        style={styles.input}
        placeholder="3"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.LableText}>Timing* </Text>
      <TextInput
        style={styles.input}
        placeholder="10:00 to 2:00"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.button_create_account}>
        <TouchableOpacity style={styles.button} onPress={SucessAlertAdd}>
          <Text style={styles.buttonText}>Add Bus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



function DeleteBus({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.LableText}> Bus Number* </Text>
      <TextInput
        style={styles.input}
        placeholder="UOBS323"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.LableText}>Road Number* </Text>
      <TextInput
        style={styles.input}
        placeholder="3"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.LableText}>Timing* </Text>
      <TextInput
        style={styles.input}
        placeholder="10:00 to 2:00"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.button_create_account}>
        <TouchableOpacity style={styles.button} onPress={SucessAlertDelete}>
          <Text style={styles.buttonText}>Remove Bus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="setting" component={Setting} />
      <Stack.Screen name="Add_Bus" component={AddBus} />
      <Stack.Screen name="Delete_Bus" component={DeleteBus} />
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
  NoteText: {
    paddingBottom: 10,
    fontSize: 16,
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
  addAndRemoveBus: {
    width: '40%',
    height: 50,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,

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
  addAndRemoveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  forget_password: {
    paddingTop: 10,
    color: '#1e90ff'
  }
});

export default SettingsScreen;
