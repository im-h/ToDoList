import React, {Component} from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Do something"},
      {id: 2, content: "Do something else"}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {

    return (
      <div className="App container">
      <h1 className="center blue-text">To-do List:</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}


export default App;
