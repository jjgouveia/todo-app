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

  const handleInput = ({ target: { value, type, checked, id: ide } }) => {
    if (type === "text") {
      const inputTask = value;
      setTask(inputTask);
      return;
    }
    if (checked) {
      document.querySelectorAll(`#${ide}`)[0].className="checked"
    } else {
      document.querySelectorAll(`#${ide}`)[0].className=""
    }
  };

  function toggleTaskCompleted(id) {
    const updatedTasks = itemsList.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTask(updatedTasks);
  }

  const deleteTask = (id) => {
    console.log(id);
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
  console.log(remainingTasks);

  return (
    <div className="todoapp stack-large">
      <h1>Todofy</h1>
      <Form
      task= { task }
      handleList={ handleList }
      handleInput={ handleInput }
      />
      <FilterButton />
      <h3>{ itemsList.length !== 0 ? remainingTasks : 'A lista ainda está vazia!' }</h3>
      <ul
        area-aria-labelledby="list-heading"
        className="todo-list stack-large stack-exception"
      >
        {
          itemsList?.map((task, index) => (
            <Todo
            key={ task.id }
            task={ task }
            handleInput={ handleInput }
            completed={ task.completed }
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={ deleteTask }
            />
          ))
        }
      </ul>
      <Footer />
    </div>
  );
}
