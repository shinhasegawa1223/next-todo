import { connectDb } from "@/app/utils/database";
import { TaskModel } from "@/models/task";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDb();
    const task = await TaskModel.findById(params.id);

    if (!task) {
      return NextResponse.json({ message: "not found task" }, { status: 404 });
    }

    return NextResponse.json({ message: "get task", task });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "can not task get" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
