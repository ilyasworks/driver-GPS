import Geolocation from 'react-native-geolocation-service';
import { useState } from "react";
import firebase from '../../database/firebase';


const db = firebase.firestore();
const collectionRef = db.collection('location');

let position_ = {lat: 0, lng: 0};

export const updateCurrentLocation = () => {

    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        // console.log('position_.lat', position_.lat, {latitude})
        // console.log('position_.lng', position_.lng, {longitude})

        // if(position_.lat !== latitude || position_.lng !== longitude ) {
        //   console.log({latitude, longitude})
        //   updateLocationInFirebase(latitude, longitude)
        // }

        // position_.lat = latitude;
        // position_.lng = longitude;

        console.log({latitude, longitude})
        updateLocationInFirebase(latitude, longitude)

        setTimeout(updateCurrentLocation, 10000);
      },
      error => {
        console.log('Error getting location:', error);
        setTimeout(updateCurrentLocation, 10000);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
      );
  };

 const updateLocationInFirebase = async(latitude, longitude) => {
  
  try {
    const documentId ='liMRiXyHLeBfbCN5DPI3';
    const documentSnapshot = await collectionRef.doc(documentId).get();
    if (documentSnapshot.exists) {
      await collectionRef.doc(documentId).update({
        lat: latitude,
        lng: longitude,
      });
      console.log('Document updated successfully!');
    } else {
      console.log('Document does not exist.');
    }
  } catch (error) {
    console.error('Error updating document:', error);
  }
  };
