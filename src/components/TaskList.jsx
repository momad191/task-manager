"use client"; 
import {useTranslations} from 'next-intl';
import { deleteTask } from "@/app/actions/task"
import { Completed } from "@/app/actions/task"
import { NotCompleted } from "@/app/actions/task"
 
 
  
 
const TaskList = ({finished,notfinished}) => {
  const t = useTranslations('HomePage');
 

  const handleDelete = async (id) => {
    var result = confirm("Want to delete this task perminently?");
        if (result) {
          await deleteTask(id);
        }
    };



    const handleCompleted = async(id) => {
      var result = confirm("Want to  assign it as a completed task?");
          if (result) {
            await Completed(id);
          }
      };
  
  
      const handleNotCompleted = async(id) => {
        var result = confirm("Want to assign it back as not completed task?");
            if (result) {
              await NotCompleted(id);
            }
        };
  


  return (
<>

<div className=" mb-10 mx-auto px-1 flex   max-w-screen-lg ">
  <div className="w-full bg-white shadow-lg rounded-lg p-6 sm:max-w-lg md:max-w-2xl lg:max-w-4xl">

    
    <h2 className="text-2xl font-bold text-center mb-6">   <button className="w-45 p-5 h-16 rounded-lg bg-red-900 flex items-center justify-center text-xl text-white"> In progress ({notfinished?.length}) </button>  </h2>

     

    {notfinished?.length > 0 ? (
      <ul className="space-y-1">
        {notfinished?.map((task) => (
          <li
            key={task._id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-md shadow-sm"
          >
            <div className="mb-4 sm:mb-0 sm:mr-10">
              <p className="font-semibold text-gray-800">{task.t_name}</p>
              <p className="text-sm text-gray-600">{task.t_desc}</p>
              <p className="text-md font-bold text-gray-600"> <span className="text-green-600">By: </span>{task.t_employee}</p>

            </div>
            <div className="space-x-0 sm:space-x-3 flex flex-col sm:flex-row space-y-3 sm:space-y-0">
              <button
              onClick={() => handleCompleted(task._id)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out w-full sm:w-auto"
              >
               completed  
              </button>
              {/* <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out w-full sm:w-auto"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button> */}
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-gray-500">No tasks yet </p>
    )}
  </div>
</div>

 

{/* /////////////////////////////////////////////////////////////////////////////Not finnished yet//////////////////////////////////////////////////////////////////////////////// */}




<div className=" mb-10 mx-auto px-1 flex   max-w-screen-lg " dir='ltr'>
  <div className="w-full bg-white shadow-lg rounded-lg p-6 sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
    <h2 className="text-2xl font-bold text-center mb-6">   <button className="w-45 p-5 h-16 rounded-lg bg-green-900 flex items-center justify-center text-xl text-white"> Done ({finished?.length}) </button>  </h2>

    {finished?.length > 0 ? (
      <ul className="space-y-1">
        {finished.map((task) => (
          <li
            key={task._id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-md shadow-sm"
          >
            <div className="mb-4 sm:mb-0 sm:mr-10">
              <p className="font-semibold text-gray-800">{task.t_name}</p>
              <p className="text-sm text-gray-600">{task.t_desc}</p>
              <p className="text-md font-bold text-gray-600"> <span className="text-green-600">By: </span>{task.t_employee}</p>
            </div>
            <div className="space-x-0 sm:space-x-3 flex flex-col sm:flex-row space-y-3 sm:space-y-0">
              <button
              onClick={() => handleNotCompleted(task._id)}
                className="ml-5 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out w-full sm:w-auto text-sm"
              >
               back (in progress)
              </button>
              <button
                className=" px-4 py-2  bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out w-full sm:w-auto"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-gray-500">No tasks yet </p>
    )}
  </div>
</div>  















</>
  );
};

export default TaskList;
