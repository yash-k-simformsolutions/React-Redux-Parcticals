import React from 'react';
import './TodoItem.css';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todo';

const TodoItem = ({ input, done, id }) => {
    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className="todoItem">
            <Checkbox 
                checked = {done}
                color = "secondary"
                onChange = {handleCheck}
                inputProps = {{ 'aria-label': 'primary checkbox' }} 
            />
            <p className={done && 'todoItem-done'}>{input}</p>
        </div>
    )
}

export default TodoItem
