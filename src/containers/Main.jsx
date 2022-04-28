import { useDispatch } from "react-redux";
import React, { useState } from 'react'
import { addTodo } from "../store/action/actionCreators";
import { Button, Container, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Main = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  const addTask = () => {
    if (text === "") return;
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <Container className="main">
      <TextField
        onChange={(event) =>
          setText(event.target.value)}
        value={text}
        fullWidth />
      <Button className="button__Add" variant="contained" onClick={addTask} endIcon={<SendIcon />}>
        add
      </Button>
    </Container>
  )
}

export default Main