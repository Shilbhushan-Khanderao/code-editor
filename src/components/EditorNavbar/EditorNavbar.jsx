import React from "react";

function EditorNavbar() {
  return (
    <div className="flex">
      <button className="bg-green-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow me-2 mb-1">
        Compile
      </button>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow me-2 mb-1">
        Run
      </button>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow me-2 mb-1">
        Submit
      </button>
      <div className="p-1 justify-end">
        <label className="text-black me-1">Filename: </label>
        <input type="text" className="bg-gray-800 me-1 w-32 rounded-md" />
        <label className="text-black me-1">Language: </label>
        <select className="bg-gray-800 rounded-md">
          <option>Java</option>
          <option>C++</option>
          <option>JavaScript</option>
        </select>
      </div>
    </div>
  );
}

export default EditorNavbar;
