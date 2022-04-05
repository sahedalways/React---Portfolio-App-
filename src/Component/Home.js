import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Style from "./home.module.css";
import Newtodo from "./newTodo";
import Todos from "./Todos";


const Home = () => {
    const [todo, setTodo] = useState([])

    const handleOnTodo = (onNewTodo) =>{
    setTodo((previewsTodo) => {
      return  [...previewsTodo, {id: uuidv4(), onNewTodo}]
    })
    }

    const handleRemoveTodo = ( id ) => {
     const filteredTodo = todo.filter((todo ) => todo.id != id)
     setTodo(filteredTodo);
    }
    

  return (
    <div className = {Style.container}>
        <h1 style={{color : "white"}}>Todo App by Sahed</h1>
        <Newtodo onTodo = {handleOnTodo}/>
        <Todos todos = {todo} onRemoveTodo = {handleRemoveTodo}/>
    </div>
  )
}


export default Home;