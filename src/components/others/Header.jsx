import React, { useState } from 'react'

const Header = (props) => {
  const loggedInUSer = JSON.parse(localStorage.getItem('loggedInUser'))


  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  } 

  return (
    <div className='text-white p-2 items-end justify-between flex'>
      <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>
        {loggedInUSer.role === 'employee' ? props.data.name:'Admin'}</span></h1>
      <button onClick={logOutUser} className='bg-red-500 p-2 rounded'>Log Out</button>
    </div>
  )
}

export default Header
