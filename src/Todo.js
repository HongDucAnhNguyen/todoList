import React from "react";
import { Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Done } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
const Todo = ({ todo, handleMark, handleDelete, index }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
      
      onClick={() => handleMark(index)} style={{ color: "#50fa7b" }}>
        {todo.isDone ? <Cancel></Cancel> : <Done></Done>}
      </Button>
      <Typography
        variant="h4"
        style={
          todo.isDone
            ? {
                textDecoration: "line-through",
                color: "gray",
              }
            : {}
        }
      >
        {todo.content}
      </Typography>

      <Button onClick={() => handleDelete(index)} style={{ color: "#ff5555" }}>
        <Delete></Delete>
      </Button>
    </div>
  );
};

export default Todo;
