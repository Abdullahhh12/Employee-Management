import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const NewTask = ({data}) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [userData, setUserData] = useContext(AuthContext);

  const handleAcceptTask = () => {
   
    
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (loggedInUser && loggedInUser.data) {
      // Update user's tasks array
      const updatedTasks = loggedInUser.data.tasks.map(task => {
        if (task.title === data.title) {
          return {
            ...task,
            active: true,
            newTask: false
          };
        }
        return task;
      });

      // Update user data with new task counters and updated tasks
      const updatedUserData = {
        ...loggedInUser.data,
        tasks: updatedTasks,
        taskNumber: {
          ...loggedInUser.data.taskNumber,
          active: loggedInUser.data.taskNumber.active + 1,
          new: loggedInUser.data.taskNumber.new - 1
        }
      };

      // Update localStorage
      localStorage.setItem('loggedInUser', JSON.stringify({
        ...loggedInUser,
        data: updatedUserData
      }));

      // Update employees array
      const updatedEmployees = userData.map(emp => 
        emp.id === loggedInUser.data.id ? updatedUserData : emp
      );
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      setUserData(updatedEmployees);
      setIsAccepted(true);
      window.location.reload();

      
    }
  };
  return (
    <div className="flex-shrink-0 h-[300px] w-[260px] md:w-[300px] bg-green-400 p-5 rounded-xl">
   <div className="flex justify-between items-center">
   <h3 className="font-semibold bg-amber-600 rounded px-1">{data.category}</h3>
   <h4 className="text-sm">{data.date}</h4>
    </div>
    <h2 className="py-2 text-2xl font-semibold">{data.title}</h2>

    <p>{data.description}</p>
    <div className='mt-4'>
    <button 
          onClick={handleAcceptTask}
          className="bg-blue-400 hover:bg-blue-500 rounded-md py-1 px-2 transition-colors"
          disabled={isAccepted}
        >Accept Task</button>
  
         </div>

  </div>

  )
}

export default NewTask
