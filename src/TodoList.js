import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem';

const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
  return (
    
      todos.length === 0 ? null : (
        <Paper>
        <List >
        {todos.map((todo, i) => (
          <Fragment key={todo.id}>
            <TodoItem todo={todo.todo}  
            id={todo.id}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            completed={todo.completed} />
            {i < todos.length - 1 && <Divider />}
          </Fragment>
        ))}
        </List>
        </Paper>
      )
  )
};

export default TodoList;

