import React from "react";

export default function FilterButton({ name, setFilter, isPressed }) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      {name === "Todas" ? (
        <>
          <span className="visually-hidden">Mostrar </span>
          <span>{name}</span>
          <span className="visually-hidden"> as Tarefas </span>
        </>
      ) : (
        <>
          <span className="visually-hidden">Mostrar</span>
          <span className="visually-hidden"> as Tarefas </span>
          <span>{name}</span>
        </>
      )}
    </button>
    //o visually-hidden precisa ser condicional para o "todas"
  );
}
