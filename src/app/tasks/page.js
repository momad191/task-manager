 
import TaskList from "@/components/TaskList"; 
import AddTaskByActions from "@/components/AddTaskByActions";
    
import { getCompletedTasks } from "@/queries/tasks"; 
import { getNotCompletedTasks } from "@/queries/tasks";
  
const taskListListPage = async() => {

  const finished = await getCompletedTasks()
  const notfinished = await getNotCompletedTasks()
  return (
   
      <div className="lg:flex md:flex">      
      {/* <TaskList /> */}
      <TaskList finished={finished}  notfinished={notfinished} />
      <AddTaskByActions />
      </div>
    
  );
};
  
export default taskListListPage;
