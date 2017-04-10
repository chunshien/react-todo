var React = require('react');
var {connect} = require('react-redux');
//var Todo = require('Todo');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function(){
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = ()=>{
      var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      if(filterTodos.length ==0){
        return (
          <p className="container-message">Nothing To Do</p>
        );
      }
      return filterTodos.map((todo)=>{
        return (
          //<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

//module.exports = TodoList;
export default connect(
  (state)=>{
    return state;
  }
)(TodoList);
