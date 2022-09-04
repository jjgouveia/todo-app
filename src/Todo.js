import React, { useState } from "react";
import './style/Todo.css'

export default function Todo() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleInput = ({ target: { value, type, checked, id } }) => {
    if(type === "text") {
      const inputTask = value;
      setTask(inputTask);
      return;
    }
    if(checked) {
      document
      .getElementById(id).className = 'checked';
    } else {
      document
      .getElementById(id).className = '';
    }
  };

  const handleList = (e) => {
    e.preventDefault();
    if (!task) return;
    setItemsList([...itemsList, task]);
    setTask("");
  };

  return (
    <div className="todo-wrapper">
      <h1>Tarefas</h1>
      <form onSubmit={handleList}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleInput}
          value={task}
          autoComplete="true"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="todo-list">
        {itemsList.length ? (
          itemsList.map((task, index) => (
            <li key={task + index}>
              <span id={ `task-${index}`} className="">{task}</span>
              <input type="checkbox" id={ `task-${index}`} onChange={ handleInput } />
            </li>
          ))
        ) : (
          <h3>A lista ainda está vazia!</h3>
        )}
      </ul>
    </div>
  );
}
