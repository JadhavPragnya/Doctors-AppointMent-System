import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../context/Appcontext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
  const Login = () => {

    let {backendurl,token,settoken}=useContext(Appcontext)
    let navigate=useNavigate()
    let [state,setstate]=useState('Sign Up')

    let [email,setemail]=useState('')
    let [password,setpassword]=useState('')
    let [name,setname]=useState('')



    let onsubmithandler=async(event)=>{
      event.preventDefault()
      try {
        if(state==='Sign Up'){
          let {data}=await axios.post(backendurl+'/api/user/register',{name,password,email})
          console.log(data)
          console.log(data.success)
          if(data.success){
            localStorage.setItem('token',data.token)
            settoken(data.token)
          }
          else{
            console.log("Lamja")
            toast.error(data.message)
          }
        }
        else{
          let {data}=await axios.post(backendurl+'/api/user/login',{password,email})
          if(data.success){
            localStorage.setItem('token',data.token)
            settoken(data.token)
          }
          else{
            toast.error(data.message)
          }
        }
      }
       catch (error) {
        console.log(error)
        toast.error(error.message)
      }

    }
    useEffect(()=>{
      if(token){
          navigate('/')
      }
    },[token])
    return (
      <form onSubmit={onsubmithandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold '>{state==='Sign Up'?"Create Account":"Login"}</p>
          <p>Please {state==='Sign Up'?"Sign Up":"Login"} to book appointment</p>
            {
              state==="Sign Up" && 
              <div className='w-full'>
                <p>Full Name</p>
                <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e)=>setname(e.target.value)} value={name} required/>
                </div>
            }
          <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1'type='email' onChange={(e)=>setemail(e.target.value)} value={email} required/>
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1'type='password' onChange={(e)=>setpassword(e.target.value)} value={password} required/>
          </div>
          <button type='submit' className='bg-[#5f6fff] text-white w-full py-2 rounded-md text-base'>{state==='Sign Up'?"Create Account":"Login"}</button>
          {
            state==="Sign Up"
            ? <p>Alreaddy have an account?<span onClick={()=>setstate('Login')} className='text-[#5f6fff] underline cursor-pointer'>Login here</span></p>
            : <p>Create an new account? <span onClick={()=>setstate('Sign Up')}className='text-[#5f6fff] underline cursor-pointer'>click here</span></p>
          }
        </div>
      </form>
    )
  }

  export default Login
