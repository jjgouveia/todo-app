import React from "react";

export default function Todo({ task, index, handleInput }) {
  return (
    <li key={`task-${index}`} className="">
      <div className="">
        <span id={`task-${index}`} className="todo-label">
          {task}
        </span>
        &nbsp;
        <input type="checkbox" id={`task-${index}`} onChange={handleInput} />
        <div className="btn-group">
          <button type="button" className="btn">
            Editar
          </button>
          <button type="button" className="btn btn__danger">
            Deletar
          </button>
        </div>
      </div>
    </li>
  );
}
