import React from 'react';
import './todo-item.css';

const TodoItem = (Props) => {
  const { todo, handleChangeProps, removeTodoItemProps } = Props;
  const onclickHandle = (e) => {
    removeTodoItemProps(e.target.value);
  };
  return (
    <div>
      <li key={todo.id} className="todo-item">
        <span>
          <input type="checkbox" value={todo.id} checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
          {todo.task}
        </span>
        <button
          className="btn"
          type="button"
          onClick={onclickHandle}
          value={todo.id}
        >
          <i className="fas fa-trash text-danger" />
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
