import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
    <div className="flex-shrink-0 h-[300px] w-[260px] md:w-[300px] bg-blue-400 p-5 rounded-xl">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold bg-amber-600 rounded px-1 ">{data.category}</h3>
      <h4 className="text-sm">{data.date}</h4>
    </div>
    <h2 className="py-2 text-2xl font-semibold">{data.title}</h2>
    <p>{data.description}</p>
   <div className='flex justify-between mt-4 space-x-2 '>
      <button className='bg-green-400 py-1 px-2 rounded-md text-sm'>Mark as completed</button>
      <button className='bg-red-400 py-1 px-2  rounded-md text-sm'>Mark as Failed</button>
    </div>   
  </div>
  )
}

export default AcceptTask
