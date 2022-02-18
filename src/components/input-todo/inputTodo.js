import React, { useState } from 'react';

const InputTodo = (Props) => {
  const { addItemProps } = Props;
  const [task, setTask] = useState('');
  const handleOnChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItemProps(task);
    setTask('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg"
          type="text"
          value={task}
          name="task"
          onChange={handleOnChange}
          placeholder="Enter todo item"
        />
      </form>
    </div>
  );
};

export default InputTodo;
