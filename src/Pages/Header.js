import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoPage from './ToDoPage';
import './ToDoPage.css';


const Header = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    return (
        <div className='header'>
            <div>
            <h1>TO DO LIST</h1>
            <ToDoForm
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            ></ToDoForm>
            </div>
            <div>
                <ToDoPage
                todos={todos}
                setTodos={setTodos}
                ></ToDoPage>
            </div>
        </div>
    );
};

export default Header;