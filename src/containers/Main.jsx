import { useDispatch } from "react-redux";
import React, { useState } from 'react'
import { addTodo } from "../store/action/actionCreators";
import { Container, TextField } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';

const Main = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();
  
  const addTask = () =>{
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
        fullWidth/>
      <AddBoxIcon onClick={addTask} />
    </Container>
  )
}

export default Main