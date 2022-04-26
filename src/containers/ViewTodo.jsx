import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Checkbox, TextField, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeTodo, completed, } from '../store/action/actionCreators';
import { addTodo } from "../store/action/actionCreators";
import '../styles/styles.scss'

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos.todos)
  const [textChange, setTextChange] = useState('')
  const [fieldСhange, setFieldChange] = useState(false)
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(removeTodo(id))
  }
  const update = (id, text) => {
    setFieldChange(id)
    setTextChange(text)
  }

  const saveCnange = (id) => {
    todos.map(todo => {
      if (todo.id === id) {
       return todo.text == textChange
      }
    })
    setFieldChange(false)
  }

  const check = (id) => {
    dispatch(completed(id))
  }

  return (
    todos && todos.map((todo) => (
      <Box key={todo.id} className="container">
        {fieldСhange === todo.id ?
          <TextField value={textChange} onChange={(e) => setTextChange(e.target.value)} onBlur={() => saveCnange(todo.id, todo.text)} />
          :
          <Box className={todo.completed ? 'completed' : 'notCompleted'}>
            <Typography  onClick={() => update(todo.id, todo.text)}>{todo.text}</Typography>
            <Checkbox onClick={() => check(todo.id)}/>
            <DeleteForeverIcon onClick={() => deleteTodo(todo.id)} />
          </Box>
        }
      </Box>
    ))
  )
}

export default ViewTodo