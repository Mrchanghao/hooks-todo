import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInput from './custom-hooks/useInput';

const formStyle ={
  marginLeft: '1rem',
  width: '100%'
}

const EditForm = ({todo, editTodo, id, toggleEditForm}) => {

  const [value, handleChange, reset] = useInput(todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value)
    reset();
    toggleEditForm();
  }


  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <TextField 
      autoFocus
      fullWidth margin='normal' value={value} onChange={handleChange}/>
    </form>
  )
};

export default EditForm;