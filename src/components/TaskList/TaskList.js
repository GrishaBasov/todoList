import './TaskList.css';
import Task from '../Task';

const TaskList = ({ setTimeFromTimer, todoData, filter, onDeleted, onToggleDone }) => {
  const filterTodos = (todoData, filter) => {
    if (filter === 'done') {
      return todoData.filter((item) => item.done);
    }
    if (filter === 'active') {
      return todoData.filter((item) => !item.done);
    }
    return todoData;
  };

  const elements = filterTodos(todoData, filter).map((item) => {
    const { id, done, ...itemProps } = item;
    return (
      <Task
        setTimeFromTimer={setTimeFromTimer}
        key={id}
        id={id}
        done={done}
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
