import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';

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
    todos: [
      { id: 'id-1', text: 'Вивчити основи React', completed: true },
      { id: 'id-2', text: 'Розібратися з React Router', completed: false },
      { id: 'id-3', text: 'Пережити Redux', completed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos:prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce((acc, todo) => todo.completed ? acc +1 : acc,0)
    return (
      <>
        <h1>Стан компонента</h1>

        {/* <ColorPicker options={colorPickerOptions}/> */}

        <div>
          <p>Загальна кількість Todo: {todos.length}</p>
          <p>Загальна кількість виконаних Todo: {completedTodos}</p>

        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
      </>
    );
  }
}

export default App;
