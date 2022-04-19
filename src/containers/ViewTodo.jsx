import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Checkbox, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { editTodo, removeTodo } from '../store/action/actionCreators';

const ViewTodo = () => {
  const [edit, setEdit] = useState('')
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch();
  
  const deleteTodo = (id) => {
    dispatch(removeTodo(id))
  }

  const update = (id) => {
    dispatch(editTodo(id))
  }

  
  return (
    <div>
     {
        todos.map((todo) =>(
          <Box key={todo.id} className="container">
          <Typography >{todo.text}</Typography>
          <Checkbox />
          <EditIcon onClick={() => update(todo.id)}/>
          <DeleteForeverIcon onClick={() => deleteTodo(todo.id)}/>
          </Box>
        ))
      }
      </div>
  )
}

export default ViewTodo