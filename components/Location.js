import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import firebase from '../database/firebase';
import { Bus } from './data/busDetails';
const db = firebase.firestore();
const collectionRef = db.collection('location');

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken("pk.eyJ1IjoibWRpbHlhcyIsImEiOiJjbGZncGI2cHgwMTg5M3JvM2dhZ2lrbHFvIn0.HX16gXyT9K-I-uqvqaoJAQ");

const Location = () => {
  const [coordinates, setCoordinates] = useState([35.28940, 75.62562]);

  useEffect(() => {
    const unsubscribe = collectionRef.onSnapshot(snapshot => {
      const updatedData = snapshot.docs.map(doc => ({
        bus: Bus[doc.id] ?? doc.id,
        location:doc.data(),
      }));
      const currentActiveBus = updatedData[0];
      if(coordinates[0] !== currentActiveBus?.location?.lng && coordinates[1] !== currentActiveBus?.location?.lat) {
        setCoordinates([currentActiveBus?.location?.lng, currentActiveBus?.location?.lat])
      }
    });

    return unsubscribe;
  }, [coordinates]);

  console.log({coordinates})

  const renderAnnotations = (stopPoints) => { 
    return (
      <MapboxGL.PointAnnotation
        key="pointAnnotation"
        id="pointAnnotation"
        //red point
        coordinate={stopPoints}
      >
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: "red",
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={14} centerCoordinate={coordinates} />
          <View>{renderAnnotations([75.662684, 35.286119])}</View>
          <View>{renderAnnotations([75.653402, 35.288846])}</View>  
          <View>{renderAnnotations([75.645214, 35.290122])}</View>  
          <View>{renderAnnotations([75.637941, 35.289939])}</View>  
          <View>{renderAnnotations([75.635012, 35.289552])}</View>  
          <View>{renderAnnotations([75.631868, 35.289179])}</View>  
          <View>{renderAnnotations([75.626780, 35.288455])}</View>  
          <View>{renderAnnotations([75.618898, 35.289815])}</View>  
          <View>{renderAnnotations([75.610766, 35.294967])}</View>  
          <View>{renderAnnotations([75.611569, 35.301441])}</View>  
          <View>{renderAnnotations([75.617511, 35.306366])}</View>  
          <View>{renderAnnotations([75.625825, 35.302151])}</View>  
          <View>{renderAnnotations([75.637649, 35.297631])}</View>  
          <View>{renderAnnotations([75.658384, 35.291063])}</View>  

          <MapboxGL.MarkerView id={"marker"} coordinate={coordinates}>
            <View>
              <View style={styles.markerContainer}>
                <Image
                  source={require("../assets/logo.png")}
                  style={{
                    width: 30,
                    height: 40,
                    resizeMode: "cover",
                  }}
                />
              </View> 
            </View>
          </MapboxGL.MarkerView>

        </MapboxGL.MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  markerContainer: {
    alignItems: "center",
    width: 60,
    backgroundColor: "transparent",
    height: 70,
  },
  map: {
    flex: 1,
  },
  textContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    paddingHorizontal: 5,
    flex: 1,
  },
  icon: {
    paddingTop: 10,
  },
});

export default Location;