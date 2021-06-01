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

var name_stg = localStorage.getItem("userlogined");
console.log("Username: " + name_stg);
document.getElementById("username_h2").innerHTML = name_stg;

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log(Room_names);
                display_row = "<div class='output_div_t' id=" + Room_names + " onclick='redrict_to_page(this.id)'>#" + Room_names + "</div>";
                document.getElementById("output").innerHTML += display_row;
                //End code
            });
        });
}

function redrict_to_page(name) {
    console.log("start of redrict");
    localStorage.setItem("room", name);
    console.log(name);
    window.location = "let's_chat_page.html";
}
getData();

function add_the_room() {
    console.log("start ok");
    room = document.getElementById("room_input").value;
    firebase.database().ref("/").child(room).update({
        purpose: "Add a room"
    });
    console.log("Firebase ok")
    localStorage.setItem("room", room);
    console.log("Local Storage ok")
    window.location = "let's_chat_page.html";
}

function logout_to_home() {
    localStorage.removeItem("userlogined");
    window.location = "login.html";
}