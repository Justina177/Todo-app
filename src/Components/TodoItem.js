import React from 'react'
import {RiCloseCircleFill} from 'react-icons/ri'
import {BiCheckCircle} from 'react-icons/bi'

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo   } = props
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
        {props.todo.text}
        <div className='iconsContainer'>
        <RiCloseCircleFill className='icon' style={{ marginRight:5}} onClick={() => removeTodo(todo.id)} />
        <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
        </div>
        
    </div>
  )
} 

