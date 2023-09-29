const firebaseConfig = {
    apiKey: "AIzaSyDp-rPJHzfXPs0wigDUPE1e3chh3ACmMgQ",
    authDomain: "novo-kwitter-7f734.firebaseapp.com",
    databaseURL: "https://novo-kwitter-7f734-default-rtdb.firebaseio.com",
    projectId: "novo-kwitter-7f734",
    storageBucket: "novo-kwitter-7f734.appspot.com",
    messagingSenderId: "566020931501",
    appId: "1:566020931501:web:f731e7b2e0030e97772b24"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
