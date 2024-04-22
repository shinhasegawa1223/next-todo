"use server";

import { connectDb } from "@/app/utils/database";
import { Task, TaskModel } from "@/models/task";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    // バリデーションロジックの追加もできる
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };

  try {
    //DBと接続してデータを登録する
    console.log("db con");

    await connectDb();
    console.log("task create");
    await TaskModel.create(newTask);
  } catch (error) {
    state.error = "Task can not create";
    return state;
  }
  // try catchの外で実施すること
  redirect("/");
};
