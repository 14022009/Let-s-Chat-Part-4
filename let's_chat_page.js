// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJJckh4ZFRP06dZjHjWYz-FQ7s1ELuVOQ",
    authDomain: "lets-chat-a7bc0.firebaseapp.com",
    databaseURL: "https://lets-chat-a7bc0-default-rtdb.firebaseio.com",
    projectId: "lets-chat-a7bc0",
    storageBucket: "lets-chat-a7bc0.appspot.com",
    messagingSenderId: "141150096314",
    appId: "1:141150096314:web:c4fc39f9ae80bba3116b83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var room_stg = localStorage.getItem("room");
var name_stg = localStorage.getItem("userlogined");
console.log("Username: " + name_stg);
document.getElementById("username_h2").innerHTML = name_stg;

function logout_to_home() {
    localStorage.removeItem("userlogined");
    window.location = "login.html";
}

function send_the_message() {
    message = document.getElementById("mess_inp_").value;
    console.log(message);
    firebase.database().ref(room_stg).push({
        name: name_stg,
        message: message,
        like: 0
    });
    console.log(room_stg);
    document.getElementById("mess_inp_").value = "";
}