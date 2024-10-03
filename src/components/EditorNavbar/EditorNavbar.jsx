"use client";
import React, { useContext, useState } from "react";
import { MyContext, ThemeContext } from "../lib/MyContext";
import { FaPlay } from "react-icons/fa";
import { SiCompilerexplorer } from "react-icons/si";
import { MdLightMode, MdNightlight } from "react-icons/md";

function EditorNavbar({ language, setLanguage }) {
  const { setText } = useContext(MyContext);
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex">
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow me-2 mb-1"
        onClick={() => setText("Compile Button Clicked")}
      >
        Compile
        {/* <SiCompilerexplorer /> */}
      </button>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow me-2 mb-1"
        onClick={() => setText("Run Button Clicked")}
      >
        Run
        {/* <FaPlay /> */}
      </button>
      <button
        className="bg-green-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow me-2 mb-1"
        onClick={() => setText("Submit Button Clicked")}
      >
        Submit
      </button>
      <div className="p-1 justify-end">
        <label className="text-black me-1">Filename: </label>
        <input type="text" className="bg-gray-800 me-1 w-32 rounded-md p-1" />
        <label className="text-black me-1">Language: </label>
        <select
          className="bg-gray-800 rounded-md p-1"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow ms-5"
          onClick={() => setTheme(!theme)}
        >
          {theme ? <MdLightMode /> : <MdNightlight />}
        </button>
      </div>
    </div>
  );
}

export default EditorNavbar;
