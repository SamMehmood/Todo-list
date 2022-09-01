import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './componenets/Form';
import Header from './componenets/Header';
import Todoslist from './componenets/Todoslist';


const App = () => {
  const [input , setInput] = useState("");
  const [inputEdit , setInputEdit] = useState("");

  const [todos , setTodos] = useState([]);
  const [editTodo , setEditTodo] = useState(null);

  const onUpdate = (e, text) => {
    const update = todos.map((t) => {
      if(e.id === t.id){
        return{
          ...t,
          title: text,
          edit: false
        }
      }else{
        return{
          ...t,
          edit: false
        }
      }
    })
    setTodos(update)
  }
  console.log(todos,input, 'todos')
  return (
    <div className='container'>
      <div className='app-wrapper'>
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
          <Todoslist  todos={todos} 
          onUpdate={onUpdate}
          setInputEdit={setInputEdit}
          inputEdit={inputEdit}
          setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>

    </div>
  );
}

export default App;
