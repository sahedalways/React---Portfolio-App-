import React, { useState } from 'react';
import style from "./newtodo.module.css";

const NewTodo = (props) => {

const [todo, setTodo] = useState({title : "", desc : ""});
const {title, desc} = todo;

const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
        return {...oldTodo, [name] : event.target.value}
    })
}

    const handleSubmit = (event) => {
        event.preventDefault();
       props.onTodo(todo);
       setTodo({title :"" , desc: ""});
    }
  return (
    <form className={style.form} onSubmit = {handleSubmit}>
     <div className={style["form-field"]}>
     <label htmlFor="title">Title :</label>
    <input onChange={handleChange} type="text" name="title" id="title" value={title}/>
    </div>
<div  className={style["form-field"]}>
<label htmlFor="desc">Description :</label>
    <textarea  onChange={handleChange} type="text" name="desc" id="desc" value={desc}/>
</div>

<div  className={style["form-field"]}>
    <button type='submit'>Add Todo</button>
</div>
   
    </form>
  );
};

export default NewTodo