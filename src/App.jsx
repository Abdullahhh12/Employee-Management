import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDash from './components/Dashboard/EmployeeDash.jsx'
import AdminDash from './components/Dashboard/AdminDash.jsx'
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'


const App = () => {
        
        
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUSer = localStorage.getItem('loggedInUser')

    if(loggedInUSer){
      const userData = JSON.parse(loggedInUSer)
      setUser(userData.role)
      setLoggedInUserData(userData.data)

    }
  
  }, [])
        

  const handleLogin=(email,password)=>{
    if(email==='admin@me.com' && password ==='123'){
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      
      const employee = userData.find((e)=>email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }
    else{
      alert('Invalid Credentials')
    }
  }
 

  

  return (
    <>
 
  {!user ? <Login handleLogin={handleLogin} />:''}
  {user === 'admin' ? <AdminDash changeUser ={setUser} />: ( user =='employee'?<EmployeeDash changeUser={setUser} data={loggedInUserData} />:null)}



    
    </>
  )
}

export default App
