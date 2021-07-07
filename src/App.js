import React from 'react';
import styled from 'styled-components';

import './components/TodoComponents/Todo.css';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
  {
    todo: 'Dummy Todo',
    id: 25,
    completed: false
  },
  {
    todo: 'Dummy Todo',
    id: 30,
    completed: true
  }
];

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px;
`



class App extends React.Component {
  constructor() {
    super() ;
    // you will need a place to store your state in this component.
    this.state = {
      todoList: todos,
    }
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
  }

  addTodo = todo => {
    const newTodo = {
      todo: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  clearTodo = () => {
    const newTodoList = this.state.todoList.filter( el => !(el.completed));

    this.setState({
      todoList: newTodoList
    })
  }

  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(el => {
      if(el.id === id){
        return {
          ...el,
          completed: !el.completed
        } 
      }
      else {
        return el;
      }
    });

    this.setState({
      todoList: newTodoList
    });

  
  };

  render() {
    return (
      <AppDiv>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm clearTodo={this.clearTodo} addTodo={this.addTodo} />
        <TodoList toggleTodo={this.toggleTodo} todoList={this.state.todoList} />
      </AppDiv>
    );
  }
}

export default App;
