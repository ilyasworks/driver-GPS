import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const DeviceTracker = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {
        isLoading ?
          // <Text style={styles.loading}>loading....</Text>
          <Image style={styles.gif} source={require('../assets/loading.gif')} />
          :
          <WebView 
            source={{uri: 'https://www.sinotrack.com/'}}
            // source={{ uri: 'https://uobs.edu.pk/' }}
            style={styles.webview}
            allowsFullscreenVideo={true}
            allowsInlineMediaPlayback={true}
          />
      }

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e90ff',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  // loading: {
  //   paddingTop: 300,
  //   color:'white',
  //   flex: 1 ,
  //   justifyContent: "center",
  //   textAlign: 'center',
  //   fontSize: 30,
  // },
  gif: {
    width: '20%',
    height: '20%',
    marginLeft: 140
  },
  webview: {
    flex: 1,
    marginLeft: -150,
    marginRight: -100
  },
});


export default DeviceTracker;