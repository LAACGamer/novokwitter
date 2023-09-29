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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
  
    window.location = "Página de Salas Kwitter";
}



