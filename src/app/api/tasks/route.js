import { NextResponse } from "next/server";
import { createTask } from "@/queries/tasks";
import { Task } from "@/model/task-model";
import { dbConnect } from "@/lib/mongo";

// export async function GET() {
//   return new Response("Hello, Next.js!");
// }

export const GET = async () => {
  try {
    // Connect to MongoDBs
    await dbConnect();

    // Fetch all tasks
    const tasks = await Task.find({});

    // Return the tasks as JSON
    return new NextResponse(JSON.stringify(tasks), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching blogs" + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  const { t_name, t_desc } = await request.json();

  console.log(t_name, t_desc);

  // Create a DB Conenction
  await dbConnect();

  // Form a DB payload
  const newTask = {
    t_name,
    t_desc,
  };
  // Update the DB
  try {
    await createTask(newTask);
  } catch (err) {
    return new NextResponse(err.mesage, {
      status: 500,
    });
  }

  return new NextResponse("task has been added", {
    status: 201,
  });
};
