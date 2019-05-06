import React, {useState ,useEffect, useRef, memo} from 'react';
import useTodo from './custom-hooks/TodoHook';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import ToolBar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


const TodoApp = memo(() => {
  const initialState = JSON.parse(window.localStorage.getItem('todos')) || '[]';
  
  const {todos, addTodo, removeTodo, editTodo, toggleTodo, } = useTodo(initialState);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos])


  return (
    <Paper 
    elevation={0}
    style={{padding: 0, 
    margin: 0, 
    height: '100vh', backgroundColor: '#fafafa'}}>
      <AppBar color='primary' position='static' style={{height: '64px'}}>
        <ToolBar>
          <Typography color='inherit'>Todos using Hooks</Typography>
        </ToolBar>
      </AppBar>
      <Grid container justify='center' style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} 
          editTodo={editTodo}
          removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </Grid>
      
      </Grid>
    </Paper>
  )
});

export default TodoApp;