import React, {Component} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
//import axios from 'axios';

import Header from "./components/layout/Header";
import Todos from "./components/todo-list/Todos";
import AddTodoItem from "./components/add-todo/AddTodoItem";
import About from "./components/pages/About";

import './App.css';

class App extends Component {
   state = {
      todos: [
      ],
   }

   //utility function for http requests
   sendRequest = async (url, method, content) => {
      let requestOptions = {
         method,
         headers: content ? {
            'Content-Type': 'application/json'
         } : {},
         body: content ? JSON.stringify(content) : null,
      }

      try {
         const res = await fetch(url, requestOptions);
         if (!res.ok) {
            return Promise.reject(res.status);
         }
         const data = await res.json();
         return data;
     } catch (error) {
         console.log(error);
     }
   }

   //to make initial request
   componentDidMount() {
      this.sendRequest('https://jsonplaceholder.typicode.com/todos?_limit=15')
         .then((data) => {             
            this.setState({todos: data}) 
         })
         .catch((err) => console.log(`error code ${err}`));

      // or shorter alternative is to use axios API
      // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
      //    .then(res => this.setState({todos: res.data}));   
   };

   toggleTodoItem = (id) => {
      this.setState({
         todos: this.state.todos.map((todo)=>{
            if(todo.id === id) {
               todo.completed = !todo.completed;
            }
            return todo;
         })
      })
   }

   removeTodoItem = (id) => {
      this.sendRequest(`https://jsonplaceholder.typicode.com/todos/${id}`, 'DELETE')
         .then((data) => this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)]
         }))
         .catch((err) => console.log(`error code ${err}`));

         // or shorter alternative is to use axios API
         // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
         //    .then(res => this.setState({
         //       todos: [...this.state.todos.filter((todo)=>todo.id !== id)]
         //    }));

   }

   addTodoItem = (title) => {
      const todoItemContent = {
         title,
         completed: false,
      };

      this.sendRequest('https://jsonplaceholder.typicode.com/todos', 'POST', todoItemContent)
         .then((data) =>
            this.setState({
               todos: [...this.state.todos, data]
            })
         )
         .catch((err) => console.log(`error code ${err}`));

      // or shorter alternative is to use axios API
      // const id = this.state.todos.length ? 
      //    (this.state.todos[this.state.todos.length-1].id + 1) : 1;
      // axios.post('https://jsonplaceholder.typicode.com/todos', {
      //    // id,
      //    title,
      //    completed: false,
      // })
      //    .then(res => {
      //       this.setState({
      //          todos: [...this.state.todos, res.data]
      //       })
      //    });
   }

   render() {
      return (
         <Router>
            <div className="App">
               <Route exact path="/" render={props => (
                  <React.Fragment>
                     <Header/>
                     <AddTodoItem addTodoItem={this.addTodoItem}/>   
                     <Todos style={{display: 'flex'}}
                        todos={this.state.todos} 
                        toggleTodoItem={this.toggleTodoItem}
                        removeTodoItem={this.removeTodoItem}
                     />
                  </React.Fragment>
               )} />
               <Route path="/about" component={About} />
            </div>
         </Router>
      );
   }
}


export default App;