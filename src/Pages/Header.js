import React, { useEffect, useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoPage from './ToDoPage';
import './ToDoPage.css';


const Header = () => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || [];
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState(initialState)


    useEffect(()=>{
        localStorage.getItem('todos', JSON.stringify(todos))
    }, [todos])

    return (


        <div className='container'>
            <div className='container'>
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
            </div>
        </div>


        
    );
};

export default Header;