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
//firebase links 
function login() {
    console.log("StartOk");
    name_of_the_user = document.getElementById("username_input").value;
    localStorage.setItem("userlogined", name_of_the_user);
    console.log("LocalStorage Ok");
    console.log(name_of_the_user);
    window.location = "let's_chat_room.html";
}