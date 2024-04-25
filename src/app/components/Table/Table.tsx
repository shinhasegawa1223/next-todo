// Table.tsx
import React, { useState } from "react";
import TableHead from "@/app/components/Table/TableHead";
import TableBody from "./TableBody";

const Table = () => {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const handleUserSelection = (selectedIndex: number) => {
    if (selectedUsers.includes(selectedIndex)) {
      setSelectedUsers(
        selectedUsers.filter((index) => index !== selectedIndex)
      );
    } else {
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
