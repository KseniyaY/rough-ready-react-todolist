import React, { Component } from 'react'
import PropTypes from "prop-types";

import "./TodoItem.css";

export class TodoItem extends Component {
    getTodoItemStyle = () => {
        return {
            display: 'flex',
            color: '#fff',
            backgroundColor: 'lightgrey',
            margin: '15px 0',
            padding: '10px',
            borderRadius: '5px',
            borderBottom: '1px grey dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none',
        }

    };

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getTodoItemStyle()}>
                <p style={{flex: '10'}}>
                    <input style={{margin: '10px'}}
                        type="checkbox" 
                        id={this.props.todo.id}
                        checked={this.props.todo.completed}
                        onChange={this.props.toggleTodoItem.bind(this, id)}
                    />
                    {title}
                    <button className="remove-btn-style"
                        onClick={this.props.removeTodoItem.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodoItem: PropTypes.func.isRequired,
    removeTodoItem: PropTypes.func.isRequired,
}

export default TodoItem 
