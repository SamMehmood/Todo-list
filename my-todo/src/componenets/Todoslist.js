import React from 'react'
import { useState } from 'react';

const Todoslist = ({ todos, setTodos , setEditTodo, onUpdate = () => {}, inputEdit, setInputEdit = () => {} }) => {


const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
    setInputEdit(findTodo.title)
}

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onChange = (e, todo) => {
        if(todo?.edit){
            e.preventDefault() 
            setInputEdit(e.target.value) 
        } else{
            e.preventDefault()
        }
    }
    console.log(inputEdit, 'óooo')
    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>
                    <input
                        type="text"
                        value={todo.edit ? inputEdit : todo.title}
                        className={'list ${todo.completed ? "completed": ""}'}
                        onChange={(event) => onChange(event, todo) } />
                    <div>
                    {
                        todo.edit ?
                        <button className='button-add-update' onClick={() => onUpdate(todo, inputEdit)}>
                            Update 
                            </button>
                    
                        :
                        <>
                    <button className='button-edit task-button'onClick={() => handleEdit(todo)}>
                            <i className='fa fa-edit'> </i>
                        </button>
                        <button className="button-delete task-button"   onClick={() => handleDelete(todo)} >
                            <i className='fa fa-trash'> </i>
                        </button>
                        </>

                    }
                    </div>
                </li>

            )
            )}
        </div>
    )
}

export default Todoslist;