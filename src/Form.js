import React, { useState } from "react";
import { Button, Input } from "@mui/material";
const Form = ({ addTodo }) => {
  const [formValue, setFormValue] = useState({
    content: "",
    isDone: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.content !== "") {
      addTodo(formValue);
      setFormValue({ content: "", isDone: false });
    }
  };
  return (
    <div>
      <form>
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
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default Form;
