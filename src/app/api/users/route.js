import { NextResponse } from "next/server";
import { getUsers } from "@/queries/users";
// import { User } from "@/model/user-model";
import { dbConnect } from "@/lib/mongo";

export const GET = async () => {
  try {
    // Connect to MongoDBs
    await dbConnect();
    // Fetch all users
    const users = await getUsers();

    // Return the users as JSON
    return new NextResponse(JSON.stringify(users), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching users" + error.message, {
      status: 500,
    });
  }
};
