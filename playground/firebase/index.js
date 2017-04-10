import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCHM8U6x5nmbNfXkmQOxdbiSeFMfTUJ-9o",
    authDomain: "cs-todo-app.firebaseapp.com",
    databaseURL: "https://cs-todo-app.firebaseio.com",
    projectId: "cs-todo-app",
    storageBucket: "cs-todo-app.appspot.com",
    messagingSenderId: "309710394541"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    name:'Todo App',
    varsion: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Chun Shien',
    age: 29
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=>{
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added',(snapshot)=>{
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed',(snapshot)=>{
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed',(snapshot)=>{
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push();
// newNoteRef.set({
//   text: 'walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);

// firebaseRef.set({
//   appName: 'Todo Application'
// });
// firebaseRef.child('user').set({
//   name: 'Mike'
// });
// firebaseRef.child('app').set({
//   name: 'Todo App'
// });

// firebaseRef.update({
//   isRunning: false,
//   // app:{
//   //   name: 'Todo Application'
//   // }
//   'app/name': 'Todo Applications'
// });
//
// firebaseRef.child('app').update({
//   name: 'To do App'
// });
//
// firebaseRef.child('user/age').remove();
//
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.child('app').once('value').then((snapshot)=>{
//   console.log('Got entire database', snapshot.key, snapshot.val());
// },(e)=>{
//     console.log('unable to fetch value', e);
// });
// var logData = (snapshot) =>{
//   console.log('Got value ', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning:false});
