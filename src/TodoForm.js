import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInput from './custom-hooks/useInput';


const TodoForm = memo(({addTodo}) => {

  const [value, handleChange, reset] = useInput('')

  return (
    <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
        reset();
      } }>
      <TextField 
      fullWidth
      value={value} onChange={handleChange} margin='normal' 
      label='new Todo'/>
      </form>
    </Paper>
  )
});

export default TodoForm;