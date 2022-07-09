import { PureComponent } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import Timer from '../timer';

import '../TaskList/TaskList.css';

export default class Task extends PureComponent {
  static defaultProps = {
    description: 'Default content (defaultProps)',
  };
  static propTypes = {
    description: PropTypes.string,
  };

  render() {
    const { id, description, min, sec, created, onDeleted, onToggleDone, done, setTimeFromTimer } = this.props;

    let classNames = 'view';
    if (done) {
      classNames += ' completed';
    }

    return (
      <li key={id} className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} defaultChecked={done} />
          <label>
            <span className="title">{description}</span>
            <Timer setTimeFromTimer={setTimeFromTimer} id={id} min={min} sec={sec} />
            <span className="description">{formatDistanceToNow(created)}</span>
          </label>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" onClick={onDeleted} />
        </div>
      </li>
    );
  }
}
