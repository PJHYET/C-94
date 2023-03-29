var firebaseConfig = {
    apiKey: "AIzaSyCvla9rGUwGkzdqcDW-0FXUg6FHmhVpxbI",
    authDomain: "test-88833.firebaseapp.com",
    databaseURL: "https://test-88833-default-rtdb.firebaseio.com",
    projectId: "test-88833",
    storageBucket: "test-88833.appspot.com",
    messagingSenderId: "706753976164",
    appId: "1:706753976164:web:8e01fbe8822eb963b74c71"
};


firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwiter_room.html";
}




function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;

                console.log("Room name " + Room_names);

                row = "<div class ='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
                document.getElementById("output").innerHTML += row;

          });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwiter_room.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}