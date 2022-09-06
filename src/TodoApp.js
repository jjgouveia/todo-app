import React, { useState } from "react";
import "./style/Todo.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Footer from "./components/Footer";
import { nanoid } from "nanoid";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleInput = ({ target: { value} }) => {
      const inputTask = value;
      setTask(inputTask);
      return;
  };

  function toggleTaskCompleted(id, event) {
    const { checked } = event.target;
    if (checked) {
      document.querySelectorAll(`#${id}`)[0].className="checked"
    } else {
      document.querySelectorAll(`#${id}`)[0].className=""
    }

    const updatedTasks = itemsList.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setItemsList(updatedTasks);
  }

  function editTask (id, newName) {
    const editedTask = itemsList.map((task) => {
      if (id === task.id) {
        return { ...task, task: newName }
      }
      return task;
    });
    setItemsList(editedTask);
  }

  const deleteTask = (id) => {
    const remainingTasks = itemsList.filter((task) => id !== task.id);
    setItemsList(remainingTasks);
  }

  const handleList = (e) => {
    e.preventDefault();
    if (!task) return;
    const newTask = { id: `todo-${nanoid()}`, task, completed: false }
    setItemsList([...itemsList, newTask]);
    setTask("");
  };

  const plural = itemsList.length !== 1 ? 's' : '';
  const remainingTasks = `${itemsList.length} tarefa${plural} restante${plural}`
  const emptyList = "A lista ainda está vazia"

  return (
    <div className="todoapp stack-large">
      <h1>Todofy</h1>
      <Form
      task= { task }
      handleList={ handleList }
      handleInput={ handleInput }
      />
      <FilterButton />
      <h3>{ itemsList.length !== 0 ? remainingTasks : emptyList }</h3>
      <ul
        area-aria-labelledby="list-heading"
        className="todo-list stack-large stack-exception"
      >
        {
          itemsList?.map((task) => (
            <Todo
            key={ task.id }
            task={ task }
            handleInput={ handleInput }
            completed={ task.completed }
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={ deleteTask }
            editedTask={ editTask }
            />
          ))
        }
      </ul>
      <Footer />
    </div>
  );
}
