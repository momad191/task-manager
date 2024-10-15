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
