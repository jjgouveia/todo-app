import React from "react";

export default function Todo({ task, toggleTaskCompleted, completed, deleteTask }) {
    return (
        <li className="">
      <div className="">
        <span id={task.id} className="todo-label">
          {task.task}
        </span>
        &nbsp;
        <input type="checkbox" id={task.id} onChange={() => toggleTaskCompleted(task.id)} defaultChecked={ task.completed } value={ completed }/>
        <div className="btn-group">
          <button type="button" className="btn">
            Editar
          </button>
          <button type="button" className="btn btn__danger" onClick={ () => deleteTask(task.id) }>
            Deletar
          </button>
        </div>
      </div>
    </li>
  );
}
