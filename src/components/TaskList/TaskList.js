import './TaskList.css';
import Task from '../Task';

const TaskList = ({ todos, onDeleted, onToggleDone, min, sec }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Task
        min={min}
        sec={sec}
        key={id}
        {...itemProps}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
      />
    );
  });

  return (
    <ul id="ul-task" className="todo-list">
      {elements}
    </ul>
  );
};

export default TaskList;
