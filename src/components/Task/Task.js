import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import '../TaskList/TaskList.css';

export default class Task extends Component {
  static defaultProps = {
    description: 'Default content (defaultProps)',
  };

  static propTypes = {
    description: PropTypes.string,
  };

  render() {
    const { id, visible, description, created, onDeleted, onToggleDone, done } = this.props;

    let classNames = 'view';
    if (done) {
      classNames += ' completed';
    }

    if (!visible) {
      classNames += ' display-none';
    }

    return (
      <li key={id} className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} />
          <label>
            <span className="description">{description}</span>
            <span className="created">{formatDistanceToNow(created)}</span>
          </label>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" onClick={onDeleted} />
        </div>
      </li>
    );
  }
}
