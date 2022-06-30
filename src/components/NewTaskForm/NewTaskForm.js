import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
    min: '',
    sec: '',
  };

  onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label, this.state.min, this.state.sec);
    this.setState(() => {
      return {
        label: '',
        min: '',
        sec: '',
      };
    });
  };

  render() {
    return (
      <header id="todoapp-header" className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit} className="new-todo-form">
          <input
            name="label"
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onHandleChange}
            value={this.state.label}
          />
          <input
            name="min"
            type="text"
            className="new-todo-form__timer"
            placeholder="Min"
            autoFocus
            onChange={this.onHandleChange}
            value={this.state.min}
          />
          <input
            name="sec"
            type="text"
            className="new-todo-form__timer"
            placeholder="Sec"
            autoFocus
            onChange={this.onHandleChange}
            value={this.state.sec}
          />
          <button type="submit" />
        </form>
      </header>
    );
  }
}
