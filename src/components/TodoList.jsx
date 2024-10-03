import React from 'react'

const TodoList = ({todos, setTodos}) => {

  const handleDelete=({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div>
        {todos.map((todo) =>(
            <li className="todo-list" key={todos.id}>
                <input type="text" 
                value={todos.title} 
                className='list' 
                onChange={(event) => event.preventDefault()}/>
<div>

  <button className='button-complete task-button'>
    <i className='fa fa-check-circle'></i>
  </button>
  <button className='button-edit task-button'>
    <i className='fa fa-edit'></i>
  </button>
  <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
    <i className='fa fa-trash'></i>
  </button>
</div>



            </li>
        ))}
    </div>
  );
};

export default TodoList