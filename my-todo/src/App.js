import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './componenets/Form';
import Header from './componenets/Header';
import Todoslist from './componenets/Todoslist';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RodoList from './Components/Todo';






const App = () => {
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
    <Router>
        <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/todo" element={<RodoList />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home name={userName} />} />
            </Routes>
        </div>
          </Router>
  );
}

export default App;



