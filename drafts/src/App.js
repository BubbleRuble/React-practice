import React, { Component } from 'react';
import uniqid from 'uniqid';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import IconButton from './components/IconButton.js/IconButton';
import initialTodos from './components/TodoList/todos.json';
import Form from './components/Forms/Forms';
import TodoEditor from './components/TodoEditor/todoEditor';
import Filter from './components/Filter.js/Filter';
import Modal from './components/Modal/Modal';
// import Clock from './components/Clock/Clock';
import Tabs from './components/Tabs/Tabs';
import tabsJson from './components/Tabs/Tabs.json';
import {ReactComponent as AddIcon} from './icons/add.svg'

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
    showModal: false,
  };
   componentDidMount() {
    // console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  addTodo = text => {
    console.log(text);

    const todo = {
      id: uniqid.process(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
    this.toggleModal()
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
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
      {/* <Tabs items={tabsJson}/> */}

      {/* <button type='button' onClick={this.toggleModal}>Взаємодія</button> */}

        {/* {showModal && (
        <Modal onClose={this.toggleModal}>
        <button type='button' onClick={this.toggleModal}>Взаємодія</button>
        </Modal>)} */}

        {/* <Filter value={filter} onChange={this.changeFilter} /> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        {/* <ColorPicker options={colorPickerOptions}/> */}

        {showModal && (
        <Modal onClose={this.toggleModal}>
        <TodoEditor onSubmit={this.addTodo}/>
        </Modal>)}
        <div>
          <p>Загальна кількість Todo: {todos.length}</p>
          <p>Загальна кількість виконаних Todo: {completedTodos}</p>
        </div>

        <IconButton onClick={this.toggleModal} aria-label='Додати'>
          <AddIcon />
        </IconButton>

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
