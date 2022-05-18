import React from 'react';
import './ToDoPage.css'

const ToDoPage = ({ todos, setTodos }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }

                }
                return item;
            })
        )
        alert('Task Completed')
    }


    // const handleEdit = ({id}) => {
    //     const findTodo = todos.find((todo) => todo.id === id);
    //     setEditTodo(findTodo)
    // }

    return (
        <div>
            <div>
            {todos.map((todo) => (
                <li className='list-items' key={todo.id}>
                    <input type="text" value={todo.title} className={`list ${todo.completed ? 'complete' : ""}`} onChange={(event) =>
                        event.preventDefault()
                    } />
                    <div className='all-todo-button'>
                        <button onClick={() => handleComplete(todo)} className='todo-class1'>Completed</button>
                        {/* <button onClick={()=> handleEdit(todo)} className='todo-class2'>Edit</button> */}
                        <button className='todo-class3' onClick={() => handleDelete(todo)}>Delete</button>
                    </div>
                </li>

            ))}
            </div>
        </div>

    );
};

export default ToDoPage;