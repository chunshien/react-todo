var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

//var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

import router from 'app/router/';
import firebase from 'app/firebase/';

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    hashHistory.push('/todos');
  }else{
    hashHistory.push('/');
  }
});
//import './../playground/firebase/index';

// store.subscribe(()=>{
//   var state = store.getState();
//
//   console.log('New State', state);
//
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));
// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

//load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!applicationStyles');



ReactDOM.render(
  //<TodoApp/>,
  <Provider store={store}>
    {router}

  </Provider>,
  document.getElementById('app')
);
