import firebase from 'firebase'

try{
  var config = {
      apiKey: "AIzaSyCHM8U6x5nmbNfXkmQOxdbiSeFMfTUJ-9o",
      authDomain: "cs-todo-app.firebaseapp.com",
      databaseURL: "https://cs-todo-app.firebaseio.com",
      projectId: "cs-todo-app",
      storageBucket: "cs-todo-app.appspot.com",
      messagingSenderId: "309710394541"
  };
  firebase.initializeApp(config);
} catch(e){
  
}

export var firebaseRef = firebase.database().ref();
export default firebase;
