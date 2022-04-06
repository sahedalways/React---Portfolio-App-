import React, { useState } from 'react'
import style from "./faq.module.css"

const FAQ = ( {id, title, desc} ) => {

const [Toggle, setToggle] = useState(false)

  return (
<article className={style.faq}>
<div>
    <h4>{title}</h4>
    <button onClick={() => {setToggle(!Toggle)}}>
      {Toggle ? "-" : "+"}
    </button>
</div>


{Toggle &&(
  <p>{desc}</p>
)}

</article>
  )
}

export default FAQ