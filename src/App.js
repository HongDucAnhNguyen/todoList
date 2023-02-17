import { useState, useEffect } from "react";
import Form from "./Form";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { Container, Typography } from "@mui/material";
const App = () => {
  const [todos, setTodos] = useState(
    !localStorage.getItem("todos-list")
      ? []
      : JSON.parse(localStorage.getItem("todos-list"))
  );

  //everytime todos list changes, save the current state to local storage
  useEffect(() => {
    localStorage.setItem("todos-list", JSON.stringify(todos));
  }, [todos]);
  const handleMark = (index) => {
    todos[index].isDone = !todos[index].isDone;
    setTodos([...todos]);
  };
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handleDelete = (index) => {
    //delete one item at index given
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  const clearAllFinished = () => {
    setTodos(todos.filter((todo) => todo.isDone === false));
  };
  return (
    <Container className="container">
      <Typography variant="h4" style={{ color: "#8be9fd" }}>
        2Do or not 2Do?...
        <br />
        🧐👇
      </Typography>
      <br />
      <div className="todos-container">
        {todos.map((todo, index) => (
          <Todo
            key={uuidv4()}
            index={index}
            todo={todo}
            handleMark={handleMark}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <br />

      <Form addTodo={addTodo} clearAllFinished={clearAllFinished} />
    </Container>
  );
};

export default App;
