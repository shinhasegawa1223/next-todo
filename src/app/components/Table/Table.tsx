// Table.tsx
import React, { useState } from "react";
import TableHead from "@/app/components/Table/TableHead";
import TableBody from "./TableBody";

const Table = () => {
  // 選択されたユーザーのインデックスを格納する状態
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  // ユーザーの選択を処理する関数
  const handleUserSelection = (selectedIndex: number) => {
    // 選択されたインデックスがすでにselectedUsers配列に含まれているかどうかをチェックする
    if (selectedUsers.includes(selectedIndex)) {
      setSelectedUsers(
        // 含まれている場合、それをselectedUsers配列から削除する
        selectedUsers.filter((index) => index !== selectedIndex)
      );
    } else {
      // 含まれていない場合、それをselectedUsers配列に追加する
      setSelectedUsers([...selectedUsers, selectedIndex]);
    }
  };

  const handleShowSelectedUsers = () => {
    alert(`Selected user indexes: ${selectedUsers.join(", ")}`);
  };

  return (
    <div>
      <div className="mt-4 text-center">
        <button onClick={handleShowSelectedUsers}>Show Selected Users</button>
      </div>
      <table className="min-w-full bg-white font-[sans-serif]">
        <TableHead />
        <TableBody onUserSelect={handleUserSelection} />
      </table>
    </div>
  );
};

export default Table;
