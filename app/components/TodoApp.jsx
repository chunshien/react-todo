var React = require('react');
//var TodoList = require('TodoList');
import TodoList from 'TodoList';
//var AddTodo = require('AddTodo');
import AddTodo from 'AddTodo';
//var TodoSearch = require('TodoSearch');
import TodoSearch from 'TodoSearch';
//var uuid = require('uuid');
//var TodoAPI = require('TodoAPI');
//var moment = require('moment');
import * as Redux from 'react-redux';
import * as actions from 'actions';


export var TodoApp=React.createClass({
  // getInitialState: function(){
  //   return {
  //     showCompleted : false,
  //     searchText: '',
  //     todos: TodoAPI.getTodos()
  //   };
  // },
  // componentDidUpdate: function(){
  //   TodoAPI.setTodos(this.state.todos);
  // },
  // handleSearch:function(showCompleted, searchText){
  //   this.setState({
  //     showCompleted : showCompleted,
  //     searchText: searchText.toLowerCase()
  //   });
  //
  //   //alert(showCompleted + "-" + searchText);
  // },
  // handleAddTodo: function(text){
  //   this.setState({
  //     todos: [...this.state.todos,
  //       {
  //         id: uuid(),
  //         text:text,
  //         completed: false,
  //         createAt: moment().unix(),
  //         completedAt: undefined
  //       }]
  //   });
  // },
  // handleToggle:function(id){
  //   var updateTodos = this.state.todos.map((todo)=>{
  //     if(todo.id === id){
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix() : undefined;
  //     }
  //     return todo;
  //   });
  //
  //   this.setState({
  //     todos: updateTodos
  //   });
  //   //alert(id);
  // },
  onLogout(e){
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render(){
    //var {todos, showCompleted, searchText} = this.state;
    //var filterTodos = TodoAPI.filterTodos(todos, showCompleted,searchText);
    return (
      <div >
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 large-5 medium-6">
            <div className="container">
              {/*<TodoSearch onSearch={this.handleSearch} />*/}
              {/*<TodoList todos={filterTodos} onToggle={this.handleToggle}/>*/}
              <TodoSearch />
              <TodoList/>
              <AddTodo />
              {/*<AddTodo onAddTodo={this.handleAddTodo}/>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(TodoApp);
