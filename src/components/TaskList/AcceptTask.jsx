import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AcceptTask = ({data}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [userData, setUserData] = useContext(AuthContext);
  
    const handleCompleted = () => {  
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      
      if (loggedInUser && loggedInUser.data) {
        // Update user's tasks array
        const updatedTasks = loggedInUser.data.tasks.map(task => {
          if (task.title === data.title) {
            return {
              ...task,
              active: false,
              completed: true
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
            active: loggedInUser.data.taskNumber.active - 1,
            completed: loggedInUser.data.taskNumber.new + 1
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
        setIsCompleted(true);
        window.location.reload();
  
        
      }
    };

    const handleFailed = () => {  
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      
      if (loggedInUser && loggedInUser.data) {
        // Update user's tasks array
        const updatedTasks = loggedInUser.data.tasks.map(task => {
          if (task.title === data.title) {
            return {
              ...task,
              active: false,
              failed: true
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
            active: loggedInUser.data.taskNumber.active - 1,
            failed: loggedInUser.data.taskNumber.new + 1
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
        setIsFailed(true);
        window.location.reload();
  
        
      }
    };
  
  return (
    <div className="flex-shrink-0 h-[300px] w-[260px] md:w-[300px] bg-blue-400 p-5 rounded-xl">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold bg-amber-600 rounded px-1 ">{data.category}</h3>
      <h4 className="text-sm">{data.date}</h4>
    </div>
    <h2 className="py-2 text-2xl font-semibold">{data.title}</h2>
    <p>{data.description}</p>
   <div className='flex justify-between mt-4 space-x-2 '>
      <button onClick={handleCompleted} disabled={isCompleted} className='bg-green-400 py-1 px-2 rounded-md text-sm'>Mark as completed</button>
      <button onClick={handleFailed} disabled={isFailed} className='bg-red-400 py-1 px-2  rounded-md text-sm'>Mark as Failed</button>
    </div>   
  </div>
  )
}

export default AcceptTask
