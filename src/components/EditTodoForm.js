import React, {useState} from 'react'
import '../App.css'

export const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue]=useState(task.task)
  const handleSubmit=e=>{
    e.preventDefault();
    editTodo(value,task.id);
    setValue("")
  }
  return (
    <form classname='TodoForm' onSubmit={handleSubmit} >
      <input type="text" className='todo-input' value={value}  placeholder='Update Task' onChange={(e)=>setValue(e.target.value)} />
      <button type='submit' className='todo-btn'> Edit Task</button>
    </form>
  )
}
