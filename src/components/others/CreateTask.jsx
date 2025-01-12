import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [title, setTaskTitle] = useState('')
  const [description, setTaskDes] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [date, setTaskDate] = useState('')
  const [category, setCategory] = useState('')

  // const [newTask, setNewTask] = useState({})
  const [userData,setUserData] = useContext(AuthContext)

  const submitHanlder = (e) => {
    e.preventDefault();
  
    // Create the task object directly
    const task = {
      title,
      date,
      description,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
  
    const data = userData;
  
    // Update the appropriate user's tasks
    data.forEach((elem) => {
      if (assignTo === elem.name) {
        elem.tasks.push(task); // Use the task object directly
        elem.taskNumber.new = elem.taskNumber.new + 1;
        
      }
    });
  
    // Update the context
    setUserData(data);
  
    // Reset the form
    setTaskDate('');
    setCategory('');
    setTaskTitle('');
    setAssignTo('');
    setTaskDes('');
  };
  

  return (
    <div>
         <div className='p-5 bg-[#1c1c1c] mt-7 rounded-md'>
          <form action="" onSubmit={(e)=>{submitHanlder(e)}} className='flex flex-wrap gap-4 justify-between items-center'>      

            <div className='w-full md:w-1/2 flex flex-col '>
              <div>
                <h3 className='text-lg text-gray-200 mb-0.5 '>Task Title</h3>
                <input value={title} onChange={(e)=>{setTaskTitle(e.target.value)}} type="text" className='bg-transparent rounded py-1 px-2 w-4/5 outline-none border-[1px] border-gray-400 mb-4 '  placeholder='Make a YouTube Video' />
              </div>


              <div >
                <h3 className='text-lg text-gray-200 mb-0.5 '>Category</h3>
                <input value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text"  className='bg-transparent rounded py-1 px-2 w-4/5 outline-none border-[1px] border-gray-400 mb-4' placeholder='Design,Development,Editing,etc.' />
              </div>
          

          <div>
            <h3 className='text-lg text-gray-200 mb-0.5 '>Date</h3>
            <input value={date} onChange={(e)=>{setTaskDate(e.target.value)}} type="date" className='bg-transparent rounded py-1 px-2 w-4/5 outline-none border-[1px] border-gray-400 mb-4'  />
          </div>

           <div>
            <h3 className='text-lg text-gray-200 mb-0.5  '>Assign to</h3>
            <input value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}} type="text" placeholder='John,Tom,etc' className= 'bg-transparent rounded py-1 px-2 w-4/5 outline-none border-[1px] border-gray-400 mb-4'  />
           </div>  

            </div>

       
        <div className='flex flex-col md:w-[40%] md:items-center '>
        
            <h3 className='text-lg text-gray-200 mb-0.5 '> Description</h3>
            <textarea value={description} onChange={(e)=>{setTaskDes(e.target.value)}}className='bg-transparent w-full  rounded py-1 px-2 outline-none border-[1px] border-gray-400 mb-4'  placeholder='Detailed Description of Task' />
  

            <button className='bg-emerald-500 md:w-[30%] border px-2 py-1 rounded-lg'>Create Task</button>
        </div>
          </form>
        </div>
      
    </div>
  )
}

export default CreateTask
