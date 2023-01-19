import React, { useState } from "react";
import CardFunc from "../card/card";
import Form from "./form.module.scss"
const FormFunc = ({a})=>{
 
  const [inputValue,inFunc] = useState({name:"",age:"",phone:""})
  const [data,SetData] = useState([])

const change =(e)=>{
 inFunc((p)=>{
  return {...p,[e.target.name]:e.target.value,
 id:new Date()
  }
 })
}

const EditFunc =(item)=>{
SetData(data.map((p)=>{
  return  p.id !== item.id ? p : item
  })
  )

}

const del = (item)=>{

  SetData(data.filter((p)=>{
    return p.id!== item.id
  })
  )
}
const submit = (e)=>{
e.preventDefault()
SetData((inputValue.name || inputValue.age || inputValue.phone ) ? [...data,inputValue] : data )

inFunc({name:"",age:"",phone:""}) 
}


  return <>
  <form className={Form.form} onSubmit={submit}>
    <input className={Form.input} onChange={change} value={inputValue.name} type="text" name="name" placeholder="name" />
    <input className={Form.input} onChange={change} value={inputValue.age} type="text" name="age" placeholder="age" />
    <input className={Form.input} onChange={change} value={inputValue.phone} type="text" name="phone" placeholder="phone"/>
    <button className={Form.btn}type="submit">submit</button>
    </form>
    <div className={Form.box}>
    {data?.map((p)=>(
 
 <CardFunc del ={del} EditFunc={EditFunc} key = {p.id} {...p} />
 ))}
    </div>
 
  </>
}

export default FormFunc