import React, {Component} from "react";
import PropTypes from "prop-types";

import TodoItem from "../todo-item/TodoItem";
class Todos extends Component {
   render() {
      return this.props.todos.map((todo)=>(
        <TodoItem key={todo.id} 
            todo={todo}
            toggleTodoItem={this.props.toggleTodoItem}
            removeTodoItem={this.props.removeTodoItem}
         />
      ));
   }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodoItem: PropTypes.func.isRequired,
    removeTodoItem: PropTypes.func.isRequired,
}

export default Todos;