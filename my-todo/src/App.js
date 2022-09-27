import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RodoList from './Components/Todo';






const App = () => {
 
  
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
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/todo" element={<RodoList />} />
              <Route path="/" element={<Home name={userName} />} />
            </Routes>
        </div>
          </Router>
  );
}

export default App;



