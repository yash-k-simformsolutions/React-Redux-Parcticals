import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { currentTodoList } from './features/todo';

function App() {
  const todoList = useSelector(currentTodoList);

  return (
    <div className="app">
      <div className="app_container">
        <h2>Todo List</h2>
        <div className="app_todoContainer">
          {
            todoList.map(item => (
              <TodoItem 
                input = {item.text}
                done = {item.done}
                id = {item.id}
              />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
