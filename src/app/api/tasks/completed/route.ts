import { connectDb } from "@/app/utils/database";
import { TaskDocument, TaskModel } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: true,
    });
    return NextResponse.json({ message: "task get", tasks: completedTasks });
  } catch (error) {
    console.log("can not get");
    return NextResponse.json({ message: "can not" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
