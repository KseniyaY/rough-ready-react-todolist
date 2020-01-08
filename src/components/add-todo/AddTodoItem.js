import React, { Component } from 'react';
import "./AddTodoItem.css";
import PropTypes from "prop-types";

export class AddTodoItem extends Component {
    //component level state
    state = {
        title: '',
    };

    addTitle = (e) => this.setState({ [e.target.name]: e.target.value });
    
    submitTodoItem = (e) => {
        e.preventDefault();
        if(this.state.title.trim() && this.state.title.length){
            //parent component method passed through props
            this.props.addTodoItem(this.state.title);
            this.setState({ ...this.state, title: ''});  
        }
    };

    render() {
        return (
            <div>
                <form className="add-todo-container">
                    <input style={{flex: '10'}}
                        className="add-todo-input"
                        type="text" 
                        name="title"
                        placeholder="Add Todo Item"
                        value={this.state.title}
                        onChange={this.addTitle} />
                    <button className="add-todo-btn"
                        style={{flex: '1'}}
                        onClick={this.submitTodoItem}>
                        Add Item
                    </button>    
                </form>
            </div>
        )
    }
}

//PropTypes
AddTodoItem.propTypes = {
    addTodoItem: PropTypes.func.isRequired,
}

export default AddTodoItem
