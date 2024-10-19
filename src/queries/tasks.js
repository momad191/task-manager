import { Task } from "@/model/task-model";

export async function createTask(task) {
  try {
    await Task.create(task);
  } catch (e) {
    throw new Error(e);
  }
}
 
export async function getTasks() {
  try {
    const tasks = await Task.find({});
    return tasks;
  } catch (e) {
    throw new Error(e);
  }
}
 


export async function getCompletedTasks() {
  try {
    const completed = await Task.find({completed:true});
    return completed;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getNotCompletedTasks() {
  try {
    const notCompleted = await Task.find({completed:false});
    return notCompleted;
  } catch (e) {
    throw new Error(e.message);
  }
}