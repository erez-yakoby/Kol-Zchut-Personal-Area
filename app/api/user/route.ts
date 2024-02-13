import { type NextRequest } from "next/server";
import clientPromise from "../../lib/mongodb";

// create simple new user
export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("kol_zchoot");
    const reqJson = await request.json();
    const user = await db.collection("users").insertOne({
      email: reqJson.email,
    });
    console.log(user);
    return Response.json(user);
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
}

// get all of the user data
export async function GET(request: NextRequest) {
  const client = await clientPromise;
  const db = client.db("kol_zchoot");
  const processes = await db
    .collection("processes")
    .find({})
    .sort({ metacritic: -1 })
    .limit(10)
    .toArray();
  return Response.json(processes);
}
