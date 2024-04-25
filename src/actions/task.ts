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

    await connectDb();

    await TaskModel.create(newTask);
  } catch (error) {
    state.error = "Task can not create";
    return state;
  }
  // try catchの外で実施すること
  redirect("/");
};

export const updateTask = async (
  id: string,
  state: FormState,
  formData: FormData
) => {
  const updateTask: Task = {
    // バリデーションロジックの追加もできる
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: Boolean(formData.get("isCompleted")),
  };

  try {
    //DBと接続してデータを登録する

    await connectDb();
    await TaskModel.updateOne({ _id: id }, updateTask);
  } catch (error) {
    state.error = "can not update";
    return state;
  }
  // try catchの外で実施すること
  redirect("/");
};

export const deleteTask = async (id: string, state: FormState) => {
  try {
    await connectDb();
    await TaskModel.deleteOne({ _id: id });
  } catch (error) {
    state.error = "can not delete";
    return state;
  }
  // try catchの外で実施すること
  redirect("/");
};
