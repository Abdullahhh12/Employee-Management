import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
    
  return (
    <div id='Alltask' className='mt-6 flex flex-col gap-4 '>
      <h3 className='text-center'>All Employees</h3>
        <div className='bg-blue-400 flex flex-row space-x-4 text-xs font-semibold md:text-lg  rounded p-2'>
            <h2 className='w-1/5'>Name</h2>
            <h3 className='w-1/5'>Active</h3>
            <h3 className='w-1/5'>New</h3>
            <h5 className='w-1/5'>completed</h5>      
            <h5 className='w-1/5'>Failed</h5>      
        </div>
        <div>
       {userData.map((elem,idx)=>{
         return <div key={idx} className='text-xs md:text-lg border-blue-500 border-2 flex space-x-4 mb-2 rounded p-2'>
            <h2 className='w-1/5'>{elem.name}</h2>
            <h3 className='w-1/5'>{elem.taskNumber.active}</h3>
            <h3 className='w-1/5'>{elem.taskNumber.new}</h3>
            <h5 className='w-1/5'>{elem.taskNumber.completed}</h5>      
            <h5 className='w-1/5'>{elem.taskNumber.failed}</h5>      
        </div>
        })}
         </div>

       
       
    </div>
  )
}

export default AllTask
