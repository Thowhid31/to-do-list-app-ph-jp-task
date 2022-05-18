import React from 'react';
import {v4 as uuidv4} from "uuid";

const ToDoForm = ({input, setInput, todos, setTodos}) => {
    const handleInputChange = event =>{
        setInput(event.target.value);
    }


    
    const handleFormSubmit = event => {
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
    }

  
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Enter Tile' className='task-input' value={input} required onChange={handleInputChange}/>
            <button className='button-add' type='submit'>ADD</button>
        </form>
    );
};

export default ToDoForm;