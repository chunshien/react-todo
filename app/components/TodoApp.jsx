var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');
var TodoAPI = require('TodoAPI');

var TodoApp=React.createClass({
  getInitialState: function(){
    return {
      showCompleted : false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleSearch:function(showCompleted, searchText){
    this.setState({
      showCompleted : showCompleted,
      searchText: searchText.toLowerCase()
    });

    //alert(showCompleted + "-" + searchText);
  },
  handleAddTodo: function(text){
    this.setState({
      todos: [...this.state.todos,
        {
          id: uuid(),
          text:text,
          completed: false
        }]
    });
  },
  handleToggle:function(id){
    var updateTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updateTodos
    });
    //alert(id);
  },
  render: function(){
    var {todos, showCompleted, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted,searchText);
    return (
      <div className="row">
        <div className="column small-centered large-4 medium-6">
          <TodoSearch onSearch={this.handleSearch} />
          <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
