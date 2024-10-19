import { NextResponse } from "next/server";
import { createTask } from "@/queries/tasks";
import { Task } from "@/model/task-model";
import { dbConnect } from "@/lib/mongo";

// export async function GET() {
//   return new Response("Hello, Next.js!");
// }


export async function GET(request) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Get query parameters for pagination (page and limit)
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1; // default to page 1
    const limit = parseInt(searchParams.get("limit")) || 10; // default to 10 tasks per page
    const skip = (page - 1) * limit;

    // Fetch tasks with pagination from the database
    const tasks = await Task.find({})
      .skip(skip)
      .limit(limit);
 
    // Get the total count of tasks
    const totalTasks = await Task.countDocuments({});

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalTasks / limit);

    // Return the tasks and pagination info as JSON
    return new NextResponse(JSON.stringify({
      status: "success",
      message: "Tasks retrieved successfully",
      page,
      totalPages,
      totalTasks,
      tasks,
    }));
  } catch (error) {
    return new NextResponse("Error in fetching: " + error.message, {
      status: 500,
    });
  }
}



// export const GET = async () => {
//   try {
//     // Connect to MongoDBs
//     await dbConnect();

//     // Fetch all tasks
//     const tasks = await Task.find({});

//     // Return the tasks as JSON
//     const results = new NextResponse(JSON.stringify({
//       status: "success",
//       message: "tasks retrieved successfully",
//       tasks,
//     })); 
//     return results
//   } catch (error) {
//     return new NextResponse("Error in fetching  " + error.message, {
//       // status: 500,
//     });
//   }
// };

export const POST = async (request) => {
  const { t_name, t_desc,t_employee } = await request.json();

  console.log(t_name, t_desc,t_employee);

  // Create a DB Conenction
  await dbConnect();

  // Form a DB payload
  const newTask = {
    t_name,
    t_desc,
    t_employee,
  };
  // add to DB
  try {
    await createTask(newTask);
  
  } catch (err) {
    return new NextResponse(err.mesage, {
      status: 500,
    });
  }

  return new NextResponse(JSON.stringify({
    status: "success",
    message: "tasks retrieved successfully",
  }), {
    status: 201,
  });

 
 

};
