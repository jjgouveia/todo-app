import React, { useState } from "react";

export default function Todo({
  task,
  completed,
  deleteTask,
  editedTask,
  toggleTaskCompleted,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setNewTaskName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editedTask(task.id, newTaskName);
    setNewTaskName("");
    setIsEditing(false);
  };

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={task.id}>Novo nome para a tarefa "{task.task}"</label>
        <input
          type="text"
          id={task.id}
          className="todo-text"
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setIsEditing(false)}
        >
          Cancelar
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Salvar
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="">
      <span id={task.id} className="todo-label">
        {task.task}
      </span>
      &nbsp;
      <input
        type="checkbox"
        id={task.id}
        onChange={(target) => toggleTaskCompleted(task.id, target)}
        defaultChecked={task.completed}
        value={completed}
      />
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setIsEditing(true)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(task.id)}
        >
          Deletar
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
  
}
