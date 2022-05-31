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
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
chat_name = localStorage.getItem("chat_name");
function send_message() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;

                console.log(firebase_message_id);
                console.log(message_data);

                name = message_data['name'];
                message = message_data['message'];

                name_with_tag = "<h4>" + name + "</h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";

                row = name_with_tag+message_with_tag;
                document.getElementById("output").innerHTML += row;
            }
        });
    });
}
getData();