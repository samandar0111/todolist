import React, { useState } from "react";
import Card from "./card.module.scss"

const CardFunc = ({ name, age, phone, id ,EditFunc,del }) => {
  const [inputValue,inFunc] = useState({name:name,age:age,phone:phone,id:id})
  
  const [EditChange, Setchange] = useState(false)
  const change =(e)=>{
    inFunc((p)=>{
     return {...p,[e.target.name]:e.target.value,
    id
     }
    })
   }

   const Delfunc = ()=> {
    del(inputValue)
   }
  const submit = (e)=>{
    e.preventDefault()
  
    EditFunc(inputValue)
    Setchange(false)
  }
  return (<>{!EditChange
    ?
    <div className={Card.box}> <h1 className={Card.name}>{name ? name : "nomalum"}</h1>
      <p className={Card.text}>{age ? age : "nomalum"}</p>
      <p className={Card.text}>{phone ? phone : "nomalum"}</p>
      <button className={Card.btn} onClick={() => Setchange(!EditChange)}>edit</button>
      <button className={Card.btn} onClick={()=>Delfunc()} type="button">delete</button> </div> : 
        <form className={Card.box} onSubmit={submit}>
          <input className={Card.input} onChange={change} defaultValue={name} type="text" name="name" /> <br />
          <input className={Card.input} onChange={change} defaultValue={age} type="text" name="age" /><br />
          <input className={Card.input} onChange={change} defaultValue={phone} type="text" name="phone" /><br />
          <button className={Card.btn} type="submit">save</button>
          <button className={Card.btn} onClick={()=>Setchange(false)} type="button">cancel</button>
        </form>
 

  }


  </>)
}
export default CardFunc
