import React from 'react';
import './ToDoPage.css'

const ToDoPage = ({ todos, setTodos }) => {
    return (
        <div className='todo-class'>
            {todos.map((todo) => (
                <li className='list-items' key={todo.id}>
                    <input type="text" value={todo.title} className='list' onChange={(event) =>
                        event.preventDefault()
                    } />
                    <div className='all-todo-button'>
                        <button className='todo-class1'>Completed</button>
                        <button className='todo-class2'>Edit</button>
                        <button className='todo-class3'>Delete</button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default ToDoPage;