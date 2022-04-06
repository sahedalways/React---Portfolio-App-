import React, { useState } from 'react';
import Faqsdata from "./Data";
import Faq from "./Faq";
import style from "./faqs.module.css"


const FAQs = () => {
const [Data, setData] = useState( Faqsdata );

  return (
    <div className={style.container}> 
<section className={style.faqs}>
  <h4 style={{textAlign: "center", fontSize: "25px", marginBottom: "35px", marginTop: "20px"}}>FAQ's Frequently Ask Questions</h4>
{Data.map(faq => <Faq  key={faq.id} {...faq}/> )}
</section> 
    </div>
  )
}

export default FAQs