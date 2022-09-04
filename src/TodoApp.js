import React, { useState } from "react";
import "./style/Todo.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Footer from "./components/Footer";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleInput = ({ target: { value, type, checked, id } }) => {
    if (type === "text") {
      const inputTask = value;
      setTask(inputTask);
      return;
    }
    if (checked) {
      document.getElementById(id).className = "checked";
    } else {
      document.getElementById(id).className = "";
    }
  };

  const handleList = (e) => {
    e.preventDefault();
    if (!task) return;
    setItemsList([...itemsList, task]);
    setTask("");
  };

  return (
    <div className="todoapp stack-large">
      <h1>Todofy</h1>
      <Form
      task= { task }
      handleList={ handleList }
      handleInput={ handleInput }
      />
      <FilterButton />
      <ul
        area-aria-labelledby="list-heading"
        className="todo-list stack-large stack-exception"
      >
        {itemsList.length ? (
          itemsList?.map((task, index) => (
            <Todo
            task={ task }
            index={ index }
            handleInput={ handleInput }/>
          ))
        ) : (
          <h3>A lista ainda está vazia!</h3>
        )}
      </ul>
      <Footer />
    </div>
  );
}
