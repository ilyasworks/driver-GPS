// database/firebaseDb.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


 const firebaseConfig = {
    apiKey: "BEsp-IErmzWXcAR506T1pGeeulZcTKZYHzjyJhHS87Pz3gIxf3PwHbffKT79zE6IAd0rxDYJZrFUn_w4vj5DBmE",
    authDomain: "finalproject-55ef6.com.fypversion3",
    databaseURL: "https://finalproject-55ef6-default-rtdb.firebaseio.com",
    projectId: "finalproject-55ef6",
    storageBucket: "finalproject-55ef6.appspot.com",
    appId: "1:73368601113:android:690e7b3224c44f64f1e088"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
 export default firebase;
//  BEsp-IErmzWXcAR506T1pGeeulZcTKZYHzjyJhHS87Pz3gIxf3PwHbffKT79zE6IAd0rxDYJZrFUn_w4vj5DBmE