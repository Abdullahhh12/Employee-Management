import React from 'react'

const TaskListNumbers = ({data}) => {
  return (

    <div className='grid grid-cols-2 md:grid-cols-4 justify-center mt-10 md:justify-between gap-5 '>
      
        <div className='rounded-xl  w-full  pt-10 pl-3 pb-2 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumber.new}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        
        <div className='rounded-xl w-full  pt-10 pl-3 pb-2 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumber.active}</h2>
            <h3 className='text-xl font-medium'>Active</h3>
        </div>
       
        <div className='rounded-xl w-full  pt-10 pl-3 pb-2 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumber.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
       
        <div className='rounded-xl w-full pt-10 pl-3 pb-2 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumber.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>

        
    </div>
    
  )
}

export default TaskListNumbers
