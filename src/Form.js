import React, { useState } from "react";
import { Button, Container, Input } from "@mui/material";
const Form = ({ addTodo }) => {
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
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    </Container>
  );
};

export default Form;
