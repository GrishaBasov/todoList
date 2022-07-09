import React, { useState } from 'react';

import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList/TaskList';

import './App.css';

const App = () => {
  let [todoData, setToDoData] = useState([]);
  const [filter, setFilter] = useState('all');
  const [id, addId] = useState(0);

  const createTodoItem = (description, min, sec) => {
    addId((id) => id + 1);
    return {
      description: description,
      created: new Date(),
      done: false,
      id: id,
      min: min,
      sec: sec,
    };
  };

  const addItem = (text, min, sec) => {
    if (text.length > 0 && filter !== 'done') {
      const newItem = createTodoItem(text, min, sec);
      setToDoData((todoData) => {
        return [newItem, ...todoData];
      });
    }
  };

  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
    setToDoData(newArray);
  };

  const onToggleDone = (id) => {
    const todos = todoData;
    todos.forEach((item) => {
      item.id === id && (item.done = !item.done);
    });
    setToDoData([...todos]);
  };

  const deleteCompletedItems = () => {
    let newArr = [];
    todoData.forEach((item) => {
      if (item.done === false) {
        newArr.push(item);
      }
    });
    setToDoData(newArr);
  };

  const clickOnFilter = (e) => {
    setFilter(e.target.id);
  };

  const setTimeFromTimer = (id, minutes, seconds) => {
    let todos = todoData;
    todos.forEach((item) => {
      if (item.id === id) {
        item.min = minutes;
        item.sec = seconds;
      }
    });
    setToDoData(todos);
  };

  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div>
      <NewTaskForm onItemAdded={addItem} />

      <TaskList
        filter={filter}
        setTimeFromTimer={setTimeFromTimer}
        todoData={todoData}
        onDeleted={deleteItem}
        onToggleDone={onToggleDone}
      />

      <Footer
        clickOnFilter={clickOnFilter}
        filter={filter}
        todoCount={todoCount}
        onDeleteCompleted={deleteCompletedItems}
      />
    </div>
  );
};

export default App;
