import React from 'react'
import TodoItem from '../todo-item/todo-item';

const TodoList = (Props) => {
  const todos = Props.todos;
  return (
    <div className="container">
      <ul className="list-group">
        <div>
          {
            todos.map(todo => (
              <TodoItem key={todo.id}
                        todo={todo}
                        handleChangeProps={Props.handleChangeProps}
                        removeTodoItemProps = {Props.removeItemProps}/>
            ))
          }
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
