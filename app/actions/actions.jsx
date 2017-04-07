
export var setSearchText = (searchText) =>{
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () =>{
  return{
    type:'TOGGLE_SHOW_COMPLETED',

  };
};


export var addTodo = (text)=>{
  return {
    type: 'ADD_TODO',
    text
  };
};

// toggleToDo(id) TOGGLE_TODO
export var toggleToDo = (id)=>{
  return{
    type:'TOGGLE_TODO',
    id
  };
};
