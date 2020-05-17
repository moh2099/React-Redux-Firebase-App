import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  // apiKey: "AIzaSyDo2HauU6PtL3PY6KthXdpIUzbDV908avo",
  // authDomain: "marioplan-files.firebaseapp.com",
  // databaseURL: "https://marioplan-files.firebaseio.com",
  // projectId: "marioplan-files",
  // storageBucket: "marioplan-files.appspot.com",
  // messagingSenderId: "1011174152626"

  apiKey: "AIzaSyCescTrEiqAzpD1NiZAy_hnXma2XhZjxIE",
  authDomain: "moh2099-react-redux-firebase.firebaseapp.com",
  databaseURL: "https://moh2099-react-redux-firebase.firebaseio.com",
  projectId: "moh2099-react-redux-firebase",
  storageBucket: "moh2099-react-redux-firebase.appspot.com",
  messagingSenderId: "815457599170",
  appId: "1:815457599170:web:fe18b5ea7b11f9feae455b"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 