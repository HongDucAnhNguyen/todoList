import React from "react";
import { Button, Card, Container, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Done } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
const Todo = ({ todo, handleMark, handleDelete, index }) => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid white",
        borderRadius: "5px",
        height: "100%",
      }}
    >
      <IconButton
        onClick={() => handleMark(index)}
        style={{ color: "#50fa7b" }}
      >
        {todo.isDone ? <Cancel></Cancel> : <Done></Done>}
      </IconButton>
      <Typography
        variant="h5"
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

      <IconButton
        onClick={() => handleDelete(index)}
        style={{ color: "#ff5555" }}
      >
        <Delete></Delete>
      </IconButton>
    </Container>
  );
};

export default Todo;
