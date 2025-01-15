import React, { useState } from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'

const EmpTasks = ({data}) => {
   
  return (
  <div id="tasklist" className="h-[55%] w-full mt-10 py-5 flex gap-4 overflow-x-auto">
  
  { data.tasks.slice().reverse().map((elem,idx)=>{
    if(elem.active){
      return <AcceptTask key={idx} data={elem}/>
    }
    if(elem.newTask){
      return <NewTask key={idx} data={elem} />
    }
    if(elem.failed){
      return <FailedTask key={idx} data={elem}/>
    }
    if(elem.completed){
      return <CompleteTask key={idx} data={elem}/>
    }
  })}


  
</div>

  )
}

export default EmpTasks
