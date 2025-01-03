import React from 'react'

const TodoList = ({ todos, setTodos, setEditTodo }) => {


  const handleComolete = ({ id }) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo)
  }
  return (
    <div>
      {todos.map((todo) => (
        <li className="todo-list" key={todo.id}>
          <input type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()} />

          <div className='btns'>
            <button className='button-complete task-button' onClick={() => handleComolete(todo)}>
              <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
              <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>




        </li>
      ))}
    </div>
  );
};

export default TodoList