"use client";
import CodeTimer from "../Timer/CodeTimer";
function EditorNavbar({ language, setLanguage }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <CodeTimer />
      </div>
      <div className="me-1">
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
      </div>
    </div>
  );
}

export default EditorNavbar;
