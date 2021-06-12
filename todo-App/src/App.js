import './App.css';
import {Header} from "./Components/Header"
import Todos from "./Components/todos"
import AddTodos from "./Components/addTodo"

import React, { useState } from 'react';

function App() {
  
  const addTodo=(title,description)=>{
    let no
    if(todos.length===0){
      no=0
    }
    else{
    no=todos[todos.length-1].no+1}
    const newTodo={
      no:no,
      title:title,
      description:description,
    }
    console.log(no)
    setTodos([...todos,newTodo]);
  }
  const onDelete=(todo)=>{
    console.log("new todo added", todo);
    setTodos(todos.filter((e)=>{
    return e!==todo
    }))
  }
  const [todos, setTodos] = useState([{
    no:1,
    title:"go to the bank",
    description:"visit bank early to avoid any queue"
  },
  {

    no:2,
    title:"visit market",
    description:"buy some fresh vegetables and fruits from the market"
  },
  {
    no:3,
    title:"water plants",
    description:"water garden plants at evening"
  }
]);
  return (<>
  <Header/><AddTodos addTodo={addTodo}/>
  <Todos todos={todos} onDelete={onDelete}/>
  
  </>

  );
}

export default App;
