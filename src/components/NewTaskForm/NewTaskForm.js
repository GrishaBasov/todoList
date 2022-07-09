import React, { useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded(label, min, sec);
    setLabel('');
    setMin('');
    setSec('');
  };

  return (
    <header id="todoapp-header" className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit} className="new-todo-form">
        <input
          name="label"
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => setLabel(e.target.value)}
          value={label}
        />
        <input
          name="min"
          type="text"
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          onChange={(e) => setMin(e.target.value)}
          value={min}
        />
        <input
          name="sec"
          type="text"
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          onChange={(e) => setSec(e.target.value)}
          value={sec}
        />
        <button type="submit" />
      </form>
    </header>
  );
};

export default NewTaskForm;
