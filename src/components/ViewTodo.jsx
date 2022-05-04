import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeTodo, completed, upTask, downTask, } from '../store/action/actionCreators';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
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
        todo.text = textChange
      }
    })
    setFieldChange(false)
  }

  const check = (id) => {
    dispatch(completed(id))
  }

  const upTodo = (id) => {
    dispatch(upTask(id))
  }
  const downTodo = (id) => {
    dispatch(downTask(id))
  }

  return (
    todos && todos.map((todo, index) => (
      <Box key={todo.id} className="container">
        {fieldСhange === todo.id ?
          <TextField
            value={textChange}
            onChange={(e) => setTextChange(e.target.value)}
            onBlur={() => saveCnange(todo.id, todo.text)}
          />
          :
          <Box className={todo.completed ? 'completed' : 'notCompleted'}>
            <Button
              disabled={index === 0 ? true : false}
              onClick={() => upTodo(todo.id)}>
              <ArrowCircleUpIcon htmlColor={index === 0 ? 'gray' : '#000'}/>
            </Button>
            <Button
              disabled={index === todos.length - 1 ? true : false}
              onClick={() => downTodo(todo.id, index)}>
              <ArrowCircleDownIcon htmlColor={index === todos.length - 1 ? 'gray' : '#000'}/>
            </Button>
            <Typography onClick={() => update(todo.id, todo.text)}>
              {todo.text}
            </Typography>
            <Checkbox color="default" onClick={() => check(todo.id)} />
            <Button onClick={() => deleteTodo(todo.id)}>
              <DeleteForeverIcon htmlColor={'#000'}/>
            </Button>
          </Box>
        }
      </Box>
    ))
  )
}

export default ViewTodo