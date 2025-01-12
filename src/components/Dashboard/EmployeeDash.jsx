import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import EmpTasks from '../others/EmpTasks'



const EmployeeDash = (props) => {
  return (
    <div className='p-10 h-screen'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data} />
        <EmpTasks data={props.data}/>
     
       
        
    </div>
  )
}

export default EmployeeDash
