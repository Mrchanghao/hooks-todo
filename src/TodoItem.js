import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import EditIcon from '@material-ui/icons/Edit';
import useToggle from './custom-hooks/useToggle';
import EditForm from './EditForm';

const TodoItem = ({todo, completed, removeTodo, id, toggleTodo, editTodo}) => {

  const [isEditing, toggle] = useToggle(false);


  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? <EditForm editTodo={editTodo} id={id} 
      toggleEditForm={toggle}
      todo={todo} /> : 
      <>
        <CheckBox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {todo}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='삭제' onClick={() => removeTodo(id)} >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='수정' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
      </>
      }
    </ListItem>
  )
};

export default TodoItem;