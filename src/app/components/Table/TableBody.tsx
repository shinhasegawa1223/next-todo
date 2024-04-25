import React, { useState } from "react";
import Delete from "@/app/components/Button/Delete";
import Edit from "@/app/components/Button/Edit";
import TableHead from "@/app/components/Table/TableHead";
const data = [
  {
    id: 1,
    name: "mark",
    email: "kelwin@example.com",
    role: "User",
    date: "2020-07-06",
  },
  {
    id: 2,
    name: "Dustin",
    email: "dustin@example.com",
    role: "User",
    date: "2021-07-06",
  },
  {
    id: 3,
    name: "Mike",
    email: "Mike@example.com",
    role: "Admin",
    date: "2024-09-06",
  },
];

const TableBody = ({
  onUserSelect,
}: {
  onUserSelect: (selectedIndex: number) => void;
}) => {
  const handleCheckboxChange = (index: number) => {
    onUserSelect(index); // チェックボックスの変更をTableコンポーネントに伝達する
  };

  return (
    <>
      <tbody className="whitespace-nowrap">
        {data.map((row, index) => (
          <tr key={row.id} className={index % 2 === 0 ? "even:bg-blue-50" : ""}>
            <td className="pl-6 w-8">
              <label
                htmlFor={`checkbox${row.id}`}
                className="flex items-center cursor-pointer"
              >
                <input
                  id={`checkbox${row.id}`}
                  type="checkbox"
                  className="hidden peer"
                  onChange={() => handleCheckboxChange(index)}
                />
                <div className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full fill-white"
                    viewBox="0 0 520 520"
                  >
                    <path
                      d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                      data-name="7-Check"
                      data-original="#000000"
                    />
                  </svg>
                </div>
              </label>
            </td>
            <td className="px-6 py-4 text-sm">{row.name}</td>
            <td className="px-6 py-4 text-sm">{row.email}</td>
            <td className="px-6 py-4 text-sm">{row.role}</td>
            <td className="px-6 py-4 text-sm">{row.date}</td>
            <td className="px-6 py-4">
              <Edit />
              <Delete />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
