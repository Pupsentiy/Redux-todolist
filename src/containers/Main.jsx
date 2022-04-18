import { useDispatch } from "react-redux";
import { Container, TextField} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useState } from 'react'
import {  addTodo } from "../store/action/actionCreators";


const Main = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  

  return (
    <Container> 
     <TextField 
      onChange={(event) => 
        setText(event.target.value)}

      value={text}/>
    <AddBoxIcon onClick={() => {
      dispatch(addTodo(text))
      }}/>
    </Container>
  )
}

export default Main