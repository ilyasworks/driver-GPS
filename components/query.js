import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, email, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SucessAlertAdd = () => {
    Alert.alert(
      'successfull',
      'your request has been sent!',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK pressed'),
        },
      ],
      { cancelable: false }
    );
  };

export default function Query() {
    const [name, setName] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const clearInputs = () => {
        setName('');
        setRegistrationNumber('');
        setEmail('');
        setMessage('');
    };

    return (
        <View style={styles.queryContiner}>
            <Text style={styles.NoteText}>Please let us know if you have any Queries </Text>
            <View>
                <Text>Name*</Text>
                <TextInput
                    name="name"
                    style={styles.input}
                    placeholder="john"
                    value={name}
                    onChangeText={(txt) => setName(txt)}
                />
            </View>
            <View>
                <Text>Registration Number*</Text>
                <TextInput
                    name="registrationNumber"
                    style={styles.input}
                    placeholder="2019-uobs-203"
                    value={registrationNumber}
                    onChangeText={(txt) => setRegistrationNumber(txt)}
                />
            </View>
            <View>
                <Text>Email*</Text>
                <TextInput
                    name="email"
                    style={styles.inputEmail}
                    placeholder="ilyasdev@gmail.com"
                    value={email}
                    onChangeText={(txt) => setEmail(txt)}
                />
            </View>
            <View>
                <Text>Message*</Text>
                <TextInput
                    name="message"
                    style={styles.inputMsg}
                    placeholder="your Query"
                    value={message}
                    onChangeText={(txt) => setMessage(txt)}
                />
                <TouchableOpacity style={styles.button} onPress={() => {
                    SucessAlertAdd();
                    clearInputs();
                }}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 150,
        height: 50,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
    },
    inputEmail: {
        width: 300,
        height: 50,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
    },
    inputMsg: {
        width: 300,
        height: 150,
        // padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
    },
    queryContiner: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        // paddingLeft: 20 
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    NoteText: {
        paddingBottom: 10,
        fontSize: 16,
        paddingTop: 10
      },
})


