import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Checkbox, Typography } from "@mui/material";

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos.todos)
  return (
    <div>
     {
        todos.map((todo) =>(
          <Box key={todo.id}>
          <Typography >{todo.text}</Typography>
          <Checkbox />
          </Box>
        ))
      }
      </div>
  )
}

export default ViewTodo