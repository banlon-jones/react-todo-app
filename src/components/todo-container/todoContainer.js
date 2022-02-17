import React, { useState } from 'react';
import Header from '../header/header';
import InputTodo from '../input-todo/inputTodo';
import TodoList from '../todo-list/todo-list';

const TodoContainer = () => {

  const [todoItems, setTodoItems] = useState([])

  const addItem = (task) => {
    const newTodo = {id: new Date().getTime(), task, completed: false}
    setTodoItems([...todoItems, newTodo]);
  };

  const handleChange = (id) => {
    let todos = todoItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoItems(todos);
  };

  const removeItem = (todoId) => {
    const todos = todoItems.filter((item) => Number(item.id) !== Number(todoId));
    setTodoItems(todos);
    console.log(todos);
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <small>
                <i className="fas fa-bars"/>
                Menu
              </small>
            </a>
          </div>
        </nav>
      </header>
      <section>
        <Header/>
      </section>
      <section>
        <InputTodo addItemProps={addItem}/>
      </section>
      <section>
        <TodoList
          todos={todoItems}
          handleChangeProps = {handleChange}
          removeItemProps = {removeItem}
        />
      </section>
    </div>
  );
}

export default TodoContainer;
