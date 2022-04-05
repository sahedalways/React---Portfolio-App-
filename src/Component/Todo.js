import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import style from "./todo.module.css";



const Todo = (props) => {
    const {title, desc} = props.todo;
    const {id} = props;
   
  const handleClick = (id) => {
     props.onRemoveTodo(id);
  }

  return (
    <article className={style.todo}>
        <div >
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button onClick={() => {handleClick(id)}} className={style.btn}>
                <i><FontAwesomeIcon icon={faTrash} /></i>
            </button>
        </div>
    </article>
  )
}

export default Todo;