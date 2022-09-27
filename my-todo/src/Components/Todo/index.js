import React, { useState, useEffect } from 'react';
import Form from '../../componenets/Form';
import Header from '../../componenets/Header';
import Todoslist from '../../componenets/Todoslist';
import '../../App.css';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';

const RodoList = () => {
  const [input, setInput] = useState("");
  const [inputEdit, setInputEdit] = useState("");

  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const onUpdate = (e, text) => {
    const update = todos.map((t) => {
      if (e.id === t.id) {
        return {
          ...t,
          title: text,
          edit: false
        }
      } else {
        return {
          ...t,
          edit: false
        }
      }
    })
    setTodos(update)
  }
  console.log(todos, input, 'todos')
  
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <>
      <h1>
          <Link to="/">Back</Link>
        </h1>
    <div className='container1'>
      <div className='app-wrapper1'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <Todoslist todos={todos}
            onUpdate={onUpdate}
            setInputEdit={setInputEdit}
            inputEdit={inputEdit}
            setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
    </>
  );
}

export default RodoList;



