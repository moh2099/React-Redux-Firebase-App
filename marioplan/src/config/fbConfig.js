import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDo2HauU6PtL3PY6KthXdpIUzbDV908avo",
  authDomain: "marioplan-files.firebaseapp.com",
  databaseURL: "https://marioplan-files.firebaseio.com",
  projectId: "marioplan-files",
  storageBucket: "marioplan-files.appspot.com",
  messagingSenderId: "1011174152626"
};
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true }); //no need for this in firebase 6.0.2 and above

export default firebase 