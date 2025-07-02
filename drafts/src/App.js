import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './components/TodoList/todos.json';
import Form from './components/Forms/Forms';
import TodoEditor from './components/TodoEditor/todoEditor';
import Filter from './components/Filter.js/Filter';

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
    filter: '',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: 'будь який згенерований айдішнік',
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    //   this.setState(prevState => ({
    //     todos: prevState.todos.map(todo => {
    //       if (todo.id === todoId) {
    //         console.log('Ми знайшли потрібний туду');
    //         return {
    //           ...todo,
    //           completed: !todo.completed,
    //         };
    //       }
    //       return todo;
    //     }),
    //   }));
    // };

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        {/* <ColorPicker options={colorPickerOptions}/> */}

        <div>
          <p>Загальна кількість Todo: {todos.length}</p>
          <p>Загальна кількість виконаних Todo: {completedTodos}</p>
        </div>

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
