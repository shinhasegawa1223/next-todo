import { connectDb } from "@/app/utils/database";
import { TaskDocument, TaskModel } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
  const currentDate = new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");
  try {
    await connectDb();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: false,
      dueDate: { $lt: currentDate },
    });
    return NextResponse.json({ message: "task get", tasks: completedTasks });
  } catch (error) {
    console.log("can not get");
    return NextResponse.json({ message: "can not" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
