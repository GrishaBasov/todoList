import { Component } from 'react';

import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList/TaskList';

import './App.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      // this.createTodoItem('Third Task'),
      // this.createTodoItem('Second Task'),
      // this.createTodoItem('First Task'),
    ],
    filter: 'all',
    min: '',
    sec: '',
  };

  createTodoItem(description) {
    return {
      description: description,
      created: new Date(),
      done: false,
      id: this.maxId++,
      visible: true,
    };
  }

  addItem = (text, min, sec) => {
    if (text.length > 0 && this.state.filter !== 'done') {
      const newItem = this.createTodoItem(text);
      this.setState(({ todoData }) => {
        const newArray = [newItem, ...todoData];
        return {
          todoData: newArray,
          min: min,
          sec: sec,
        };
      });
    }
  };
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  toggleProperty(arr, id) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, done: !oldItem.done };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id),
      };
    });
  };

  deleteCompletedItems = () => {
    this.setState(({ todoData }) => {
      let newArr = [];
      todoData.forEach((item) => {
        if (item.done === false) {
          newArr.push(item);
        }
      });
      return {
        todoData: newArr,
      };
    });
  };

  clickOnFilter = (e) => {
    this.setState({
      filter: e.target.id,
    });
  };

  filterTodos = () => {
    let todoData = this.state.todoData;

    if (this.state.filter === 'done') {
      return todoData.filter((item) => item.done);
    }
    if (this.state.filter === 'active') {
      return todoData.filter((item) => !item.done);
    }
    return todoData;
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div>
        <NewTaskForm onItemAdded={this.addItem} />
        <TaskList
          todos={this.filterTodos()}
          min={this.state.min}
          sec={this.state.sec}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
        />
        <Footer
          clickOnFilter={this.clickOnFilter}
          filter={this.state.filter}
          todoCount={todoCount}
          onDeleteCompleted={this.deleteCompletedItems}
        />
      </div>
    );
  }
}
