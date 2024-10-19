 "use server"
import { Task } from "@/model/task-model"; 
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
  

export async function deleteTask(id){
  const task = await Task.findById(id);
  await task.deleteOne({ _id: task._id });
  revalidatePath('/tasks'); 
}
 
export async function Completed(id){
  const task = await Task.findById(id);
   await task.updateOne({ completed: true });
  revalidatePath('/tasks');
}

export async function NotCompleted(id){
  const task = await Task.findById(id);
   await task.updateOne({ completed: false });
  revalidatePath('/tasks');
}

 



export async function creatTask(formData) {
  try {
    const session = await auth();
    const loggedInUser = session?.user;
    const user = loggedInUser?.email;

     const t_name = formData["t_name"];
    const t_desc = formData["t_desc"];
    const t_employee = formData["t_employee"];
    // console.log(t_name, t_desc,t_employee);
    if (!t_name) return null;
      const task = {
        user,
        t_name,
        t_desc,
        t_employee
      }
      await Task.create(task);
      revalidatePath('/tasks');
  } catch (e) {
    throw new Error(e.message)
  }
}








