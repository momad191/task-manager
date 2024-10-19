import { NextResponse } from "next/server";
import { Task } from "@/model/task-model";
import { dbConnect } from "@/lib/mongo";


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
      const tasks = await Task.find({ completed: false })
        .skip(skip)
        .limit(limit);
  
      // Get the total count of tasks
      const totalTasks = await Task.countDocuments({ completed: false });
  
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
  
