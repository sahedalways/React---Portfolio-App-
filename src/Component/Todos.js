import React from 'react';
import Todo from "./Todo";
import Style from "./todos.module.css";

const Todos = (props) => {
  return (
    <section className={Style.todos} >
        {props.todos.map((todo) => <Todo key={todo.id} todo = {todo.onNewTodo} id = {todo.id} onRemoveTodo = {props.onRemoveTodo}/>)}
    </section>
  )
}


export default Todos;