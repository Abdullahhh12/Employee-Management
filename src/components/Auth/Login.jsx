import React, { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from "react-icons/md";


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('john@me.com');
    const [password, setPassword] = useState('123');
    const [show, setShow] = useState('password')

    const [isAdminLogin, setIsAdminLogin] = useState(false);



    const submitHanlder =(e)=>{
        e.preventDefault();
        handleLogin(email,password)
    
        setEmail("");
        setPassword("");     
}
   
    const passwordHandle=()=>{
        if(show == 'password'){
            setShow('text');
        }
        else{
            setShow('password');
        }
    }
    const adminLoginHandler = () => {
        setEmail('admin@me.com'); // Prefilled admin email
        setPassword('123'); // Prefilled admin password
        setIsAdminLogin(true); // Hide the admin login button
      };

  return (
    <div className='flex w-full h-full mt-10 flex-col items-center space-y-5 justify-center'>
        <div className='text-4xl md:text-5xl text-green-400 '>
            <h1>Log In</h1>
        </div>
        <div  className='border-2 border-green-400 rounded-lg p-10 md:p-20'>
            <form onSubmit={(e)=>submitHanlder(e)} action="" className='flex flex-col gap-6'>
                <input  value={email}  onChange={(e)=>setEmail(e.target.value)} className='border-2 border-green-400 p-2 rounded bg-black ' type="email" placeholder='Email' required />
                <div className='border-2 border-green-400 flex justify-center items-center rounded'>        
                <input value={password} onChange={(e)=>setPassword(e.target.value)}  className=' p-2  bg-black' type={show} placeholder='Password' required />
                <span className='text-white ' onClick={()=>passwordHandle()}>
                {
                show === "password" ?(<MdVisibilityOff size={18}  />) : (<MdVisibility size={18} />)
                }
                </span>
                </div>

                <button className='rounded bg-green-400 p-2 text-black '>Log In</button>

            </form>
        </div>

          {/* Show the "Admin Login?" button only if isAdminLogin is false */}
      {!isAdminLogin && (
        <button
          onClick={adminLoginHandler}
          className="border-blue-300 border-2 py-1 px-2 rounded-md"
        >
          Admin Login
        </button>
      )}
       
      
    </div>
  )
}

export default Login
