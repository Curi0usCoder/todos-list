import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import {Footer} from './myComponents/Footer';
import {Todos} from './myComponents/Todos';
import { useState } from 'react';
import { AddTodos } from './myComponents/AddTodos';

function App() {

const onDelete = (todo)=>{
  console.log("Iam onDelete function", todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
}

const addTodo = (title, desc)=>{
  console.log("I am adding this todo", title, desc)
  let sno=1;
  if(!todos.length==0){
    sno = todos[todos.length-1].sno+1;
  }
  
  const myTodo = {
    sno: sno,
    title: title,
    desc: desc,
  }
  setTodos([...todos, myTodo]);
  console.log(myTodo);
}

const [todos, setTodos] =useState([
  
]
); 
  return (
    <>
    <Header title = "My Todos List" searchbar = {false}/>
    <AddTodos addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
