"use client";
import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import EditorNavbar from "../EditorNavbar/EditorNavbar";
import { ThemeContext } from "../lib/MyContext";

function CodeEditor({ topHeight, editorWidth }) {
  const [activity, setActivity] = useState("");
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState(false);

  const editorRef = useRef(null);

  const options = {
    selectOnLineNumbers: true,
    mouseWheelZoom: true,
    fontSize: 18,
    contextmenu: false,
    formatOnType: true,
    smoothScrolling: true,
    wordWrap: "on",
    dragAndDrop: false,
    suggestOnTriggerCharacters: false,
    quickSuggestions: false,
  };

  const onMount = (editor) => {
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
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Modal activity={activity} open={open} onClose={() => setOpen(false)} />
        <EditorNavbar language={language} setLanguage={setLanguage} />
        <div className="overlay overflow-hidden w-full h-full shadow-4xl rounded-md">
          <Editor
            height={`${topHeight}vh`}
            width={`${editorWidth}vw`}
            theme={!theme ? "vs-dark" : "light"}
            language={language}
            options={options}
            defaultValue="Write your code here..."
            onMount={onMount}
          />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default CodeEditor;
