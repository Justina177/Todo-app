import React, { useState } from 'react'


export default function ToDoForm(props) {
    const [Input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(Input)
        setInput("")

    }
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
        <input 
        value={Input}
        onChange={(e) => setInput(e.target.value)}
        className='todo-input' 
        placeholder="Add a todo" 
        />
        <button type="submit" className='todo-button'>Add Todo</button>

    </form>
  );
}
 