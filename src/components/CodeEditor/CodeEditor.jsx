"use client";
import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import Modal from "../Modal/Modal";

function CodeEditor({ topHeight, editorWidth }) {
  const [activity, setActivity] = useState("");
  const [open, setOpen] = useState(false);

  const editorRef = useRef(null);

  const options = {
    selectOnLineNumbers: true,
    mouseWheelZoom: true,
    fontSize: 18,
    contextmenu: false,
    formatOnType: true,
    smoothScrolling: true,
    wordWrap: "on",
  };

  const onMount = (editor, monaco) => {
    editorRef.current = editor;
    editor.focus();

    editor.onKeyDown((event) => {
      const { keyCode, ctrlKey, metaKey } = event;
      if ((keyCode === 33 || keyCode === 52) && (metaKey || ctrlKey)) {
        event.preventDefault();
        setActivity("copypaste");
        setOpen(true);
      }
    });
  };

  return (
    <div>
      <Modal activity={activity} open={open} onClose={() => setOpen(false)} />
      <div className="flex p-1 justify-end">
        <label className="text-black me-1">Filename:</label>
        <input type="text" className="bg-gray-800 me-1" />
        <label className="text-black me-1">Language: </label>
        <select className="bg-gray-800">
          <option>Java</option>
          <option>C++</option>
          <option>JavaScript</option>
        </select>
      </div>
      <div className="overlay overflow-hidden w-full h-full shadow-4xl">
        <Editor
          height={`${topHeight}vh`}
          width={`${editorWidth}vw`}
          theme="vs-dark"
          language="java"
          options={options}
          defaultValue="Write your code here..."
          onMount={onMount}
        />
      </div>
    </div>
  );
}

export default CodeEditor;
