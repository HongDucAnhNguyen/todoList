import React from "react";
import { Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Done } from "@mui/icons-material";
const Todo = ({ todo, handleMark, handleDelete, index }) => {
  return (
    <div
      style={
        todo.isDone ? { textDecoration: "line-through", color: "gray" } : {}
      }
    >
      <Typography variant="h4">{todo.content}</Typography>
      <Button onClick={() => handleMark(index)} style={{ color: "#50fa7b" }}>
        <Done></Done>
      </Button>
      <Button onClick={() => handleDelete(index)} style={{ color: "#ff5555" }}>
        <Delete></Delete>
      </Button>
    </div>
  );
};

export default Todo;
