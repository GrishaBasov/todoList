import { Component } from 'react';

import './TasksFilter.css';

export default class TasksFilter extends Component {
  render() {
    const { filter, clickOnFilter } = this.props;
    let classNameAll = 'view';
    let classNameActive = 'view';
    let classNameDone = 'view';

    if (filter === 'all') {
      classNameAll += ' selected';
    }
    if (filter === 'active') {
      classNameActive += ' selected';
    }

    if (filter === 'done') {
      classNameDone += ' selected';
    }

    return (
      <ul className="filters">
        <li>
          <button id="all" className={classNameAll} onClick={clickOnFilter}>
            All
          </button>
        </li>
        <li>
          <button id="active" className={classNameActive} onClick={clickOnFilter}>
            Active
          </button>
        </li>
        <li>
          <button id="done" className={classNameDone} onClick={clickOnFilter}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
