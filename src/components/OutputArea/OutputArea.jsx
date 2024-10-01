import React, { useContext } from "react";
import { MyContext } from "../lib/MyContext";

function OutputArea() {
  const { text } = useContext(MyContext);
  return (
    <div className="p-1 h-full bg-slate-500 rounded-md">
      Output Area
      <text className="flex">{text}</text>
    </div>
  );
}

export default OutputArea;
