import React, { useState } from 'react';
import Header from '../header/header';
import InputTodo from '../input-todo/inputTodo';
import TodoList from '../todo-list/todo-list';

const TodoContainer = () => {
  const [todoItems, setTodoItems] = useState([]);

  const addItem = (task) => {
    const newTodo = { id: new Date().getTime(), task, completed: false };
    setTodoItems([...todoItems, newTodo]);
  };

  const handleChange = (id) => {
    const todos = todoItems.map((item) => {
      if (item.id === id) {
        /* eslint-disable no-param-reassign */
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoItems(todos);
  };

  const removeItem = (todoId) => {
    const todos = todoItems.filter((item) => Number(item.id) !== Number(todoId));
    setTodoItems(todos);
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <b className="navbar-brand">
              <small>
                <i className="fas fa-bars" />
                Menu
              </small>
            </b>
          </div>
        </nav>
      </header>
      <section>
        <Header />
      </section>
      <section>
        <InputTodo addItemProps={addItem} />
      </section>
      <section>
        <TodoList
          todos={todoItems}
          handleChangeProps={handleChange}
          removeItemProps={removeItem}
        />
      </section>
    </div>
  );
};

export default TodoContainer;
