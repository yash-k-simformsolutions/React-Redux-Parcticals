import React, { useState } from 'react'
import { saveTodo } from '../features/todo';
import './Input.css';
import { useDispatch } from 'react-redux';

const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        console.log(`Adding ${input}`)

        dispatch(saveTodo({
            text: input,
            done: false,
            id: Date.now() 
        })) 

        setInput('');
    }

    return (
        <div className="input">
            <input type="text"  value={input} onChange={e => {setInput(e.target.value)}} />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default Input