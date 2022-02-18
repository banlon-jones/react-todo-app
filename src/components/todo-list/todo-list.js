import React from 'react';
import TodoItem from '../todo-item/todo-item';

const TodoList = (Props) => {
  const { todos, handleChangeProps, removeItemProps } = Props;
  return (
    <div className="container">
      <ul className="list-group">
        <div>
          {
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleChangeProps={handleChangeProps}
                removeTodoItemProps={removeItemProps}
              />
            ))
          }
        </div>
      </ul>
    </div>
  );
};

export default TodoList;
