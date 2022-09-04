import React from "react";

export default function FilterButton() {
  return (
    <div className="filters btn-group stack-exception">
      <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Mostrar </span>
        <span>Todas</span>
        <span className="visually-hidden"> as Tarefas</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span className="visually-hidden">Mostrar </span>
        <span>em Andamento</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span className="visually-hidden">Mostrar </span>
        <span className="visually-hidden"> tarefas</span>
        <span> Finalizadas</span>
      </button>
    </div>
  );
}
