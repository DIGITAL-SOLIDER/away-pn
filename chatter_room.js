// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCmDMQ4SZyt3wbFLIyfHi2nxHdiccqp2_U",
  authDomain: "awpn-e93f2.firebaseapp.com",
  databaseURL: "https://awpn-e93f2-default-rtdb.firebaseio.com",
  projectId: "awpn-e93f2",
  storageBucket: "awpn-e93f2.appspot.com",
  messagingSenderId: "74360025916",
  appId: "1:74360025916:web:2943bb9581398a0d5a2439",
  measurementId: "G-7NQ1MC82BF"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();