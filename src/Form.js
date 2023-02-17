import React, { useState } from "react";
import { Button, Container, IconButton, Input } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

const Form = ({ addTodo, clearAllFinished }) => {
  const [formValue, setFormValue] = useState({
    content: "",
    isDone: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(formValue);
    setFormValue({ content: "", isDone: false });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          autoFocus
          inputProps={{ maxLength: 40 }}
          style={{
            background: "#f8f8f2	",
            color: "	#44475a",
            padding: "2px",
          }}
          required
          variant="outlined"
          value={formValue.content}
          onChange={(e) =>
            setFormValue({ ...formValue, content: e.target.value })
          }
        />
        <IconButton variant="contained" color="primary" type="submit">
          <AddTaskIcon></AddTaskIcon>
        </IconButton>
        <IconButton variant="contained" onClick={clearAllFinished}>
          <RemoveDoneIcon color="primary"></RemoveDoneIcon>
        </IconButton>
      </form>
    </Container>
  );
};

export default Form;
