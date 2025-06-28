import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './components/TodoList/todos.json';
import Form from './components/Forms/Forms';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D89' },
//   { label: 'pink', color: '#E91E64' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('Ми знайшли потрібний туду');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;
    // const completedTodos = todos.reduce((acc, todo) => todo.completed ? acc +1 : acc,0)
    return (
      <>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        {/* <ColorPicker options={colorPickerOptions}/> */}

        {/* <div>
          <p>Загальна кількість Todo: {todos.length}</p>
          <p>Загальна кількість виконаних Todo: {completedTodos}</p>

        </div> */}

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/>
      </>
    );
  }
}

export default App;
