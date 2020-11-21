  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAQbZgJMpoM5n0Qb7WHLKa5QAOO9O5Uj9Y",
    authDomain: "lake-chat.firebaseapp.com",
    databaseURL: "https://lake-chat.firebaseio.com",
    projectId: "lake-chat",
    storageBucket: "lake-chat.appspot.com",
    messagingSenderId: "985799086062",
    appId: "1:985799086062:web:8e148147ecdc1e84d408ff",
    measurementId: "G-EL1EF8MP1X"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  // firebase.analytics();

  export default firebaseApp.firestore()