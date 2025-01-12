import React from 'react'

const FailedTask = () => {
  return (
    <div className="flex-shrink-0 h-[300px] w-[260px] md:max-w-[300px] bg-red-400 p-5 rounded-xl">
   <div className="flex justify-between items-center">
   <h3 className="font-semibold bg-amber-600 rounded px-1 ">{data.category}</h3>
   <h4 className="text-sm">{data.date}</h4>
    </div>
    <h2 className="py-2 text-2xl font-semibold">{data.title}</h2>
    <p>{data.description}</p>
<div className='mt-2'>
    <button className='bg-red-400 rounded-md py-1 px-2'>Failed</button>
</div>

  </div>
  )
}

export default FailedTask
