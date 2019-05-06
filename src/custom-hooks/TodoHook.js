import {useState} from 'react';
import uuid from 'uuid4';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, {id: uuid(), todo: newTodoText, completed: false}])
    },
    toggleTodo: (id) => {
      const updatedTodos = todos.map(todo => {
        return todo.id === id ? {...todo, completed: !todo.completed} : todo
      });
      setTodos(updatedTodos);
    },
    removeTodo: (id) => {
      const updatedTodo = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodo);
    },
    editTodo: (id, newTodo) => {
      const updatedTodos = todos.map(todo => {
        return todo.id === id ? {...todo, todo: newTodo} : todo
      });
      setTodos(updatedTodos);
    }
  }
}

// const addTodo = newTodoText => {
//   setTodos([...todos, {id: uuid(), todo: newTodoText, completed: false}])
// }

// const toggleTodo = (id) => {
//   const updatedTodos = todos.map(todo => {
//     return todo.id === id ? {...todo, completed: !todo.completed} : todo
//   });
//   setTodos(updatedTodos);
// }

// const removeTodo = (id) => {
//   const updatedTodo = todos.filter(todo => todo.id !== id);
//   setTodos(updatedTodo);
// } 

// const editTodo = (id, newTodo) => {
//   const updatedTodos = todos.map(todo => {
//     return todo.id === id ? {...todo, todo: newTodo} : todo
//   });
//   setTodos(updatedTodos);
// }