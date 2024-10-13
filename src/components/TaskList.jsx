"use client";
import { getAllTasks } from "@/data/tasks";
import Link from "next/link";

const TaskList = () => {
  const tasks = getAllTasks();
  return (
    <div className="flex flex-col justify-center items-center p-8">
      {tasks.map((task) => (
        <Link href={`/tasks/${task.id}`}>
          <div className="text-2xl">
            <p>
              {task.image} - {task.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TaskList;
