import React from 'react'

export default function Form({ handleList, handleInput, task }) {
  return (
    <form onSubmit={handleList}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            O que precisa ser feito?
          </label>
        </h2>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleInput}
          value={task}
          autoComplete="off"
          className="input input__lg"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Adicionar
        </button>
      </form>
  )
}
