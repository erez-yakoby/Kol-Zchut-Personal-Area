import { type NextRequest } from "next/server";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

// create a new process for a user
export async function POST(request: NextRequest) {
  try {
    const reqJson = await request.json();
    console.log(reqJson);
    const client = await clientPromise;
    const db = client.db("kol_zchoot");
    const usersC = db.collection("users");
    const processesC = db.collection("processes");

    const user = await usersC.findOne({
      _id: new ObjectId(reqJson.userId),
    });

    const process = await processesC.insertOne({
      userId: reqJson.userId,
      processType: reqJson.processType,
    });
    console.log(user);
    console.log(process);
    return Response.json(process);
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
}
