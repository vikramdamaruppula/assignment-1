import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./styles.css"

const Login = () => {
    const [name,setName] =useState("")
    const [password,setPassword] =useState("")
    const[errMsg,setErrMsg] =useState("")

    const user = "user"
    const passcode ="password"

    const navigate = useNavigate()

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(`\n user:${name} \n password:${password}`)
        if(name===user && password===passcode){
            navigate("/home")
        } else{
            setErrMsg("details not found")
        }
        
    }

  return (
    <div className='container form-container'>
        <form className='container ' onSubmit={handleForm}>
            <label>UserName:</label>
            <input type="text" value={name} className='form-control w-75' onChange={(e)=>setName(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} className='form-control w-75' onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit' className='btn btn-primary p-2 mt-2'>  Login </button>
            <p className='text-danger'>{errMsg}</p> 
        </form>
        <img className='image' src="https://media.licdn.com/dms/image/C4D22AQENvYDhjeAIFw/feedshare-shrink_800/0/1674200942233?e=1683158400&v=beta&t=q9yQIDC40ejryNPkGEPT0oDB8PiEzwjZuNKUT7Zd66I" alt="login" />
    </div>
  )
}

export default Login
