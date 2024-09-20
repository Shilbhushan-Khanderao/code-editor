"use client";
import React, { useState } from "react";
import QuestionArea from "../QuestionArea/QuestionArea";
import OutputArea from "../OutputArea/OutputArea";
import TestCaseArea from "../TestCaseArea/TestCaseArea";
import CodeEditor from "../CodeEditor/CodeEditor";

function OverallLayout() {
  const [questionWidth, setQuestionWidth] = useState(40);
  const [editorWidth, setEditorWidth] = useState(60);
  const [topHeight, setTopHeight] = useState(70);
  const [bottomHeight, setBottomHeight] = useState(30);

  const handleHorizontalDrag = (e) => {
    e.preventDefault();
    const newQuestionWidth = (e.clientX / window.innerWidth) * 100;
    const newEditorWidth = 100 - newQuestionWidth;

    if (newQuestionWidth > 20 && newEditorWidth > 20) {
      setQuestionWidth(newQuestionWidth);
      setEditorWidth(newEditorWidth);
    }
  };

  const handleVerticalDrag = (e) => {
    e.preventDefault();
    const newTopHeight = (e.clientY / window.innerHeight) * 100;
    const newBottomHeight = 100 - newTopHeight;

    if (newTopHeight > 20 && newBottomHeight > 20) {
      setTopHeight(newTopHeight);
      setBottomHeight(newBottomHeight);
    }
  };

  const handleMouseDownHorizontal = () => {
    document.addEventListener("mousemove", handleHorizontalDrag);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownVertical = () => {
    document.addEventListener("mousemove", handleVerticalDrag);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleHorizontalDrag);
    document.removeEventListener("mousemove", handleVerticalDrag);
    document.removeEventListener("mouseup", handleMouseUp);
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex w-full" style={{ height: `${topHeight}%` }}>
        <div
          className="relative bg-gray-700 p-4 overflow-auto text-ellipsis"
          style={{ width: `${questionWidth}%` }}
        >
          <QuestionArea />
        </div>
        <div
          className="w-2 bg-gray-300 cursor-col-resize"
          onMouseDown={handleMouseDownHorizontal}
        ></div>
        <div
          className="relative bg-gray-100 p-2 overflow-auto text-ellipsis"
          style={{ width: `${editorWidth}%` }}
        >
          <CodeEditor topHeight={topHeight} editorWidth={editorWidth} />
        </div>
      </div>
      <div
        className="h-2 bg-gray-400 cursor-row-resize"
        onMouseDown={handleMouseDownVertical}
      ></div>
      <div
        className="flex flex-col md:flex-row w-full"
        style={{ height: `${bottomHeight}%` }}
      >
        <div className="flex-1 bg-gray-200 p-4 overflow-auto">
          <OutputArea />
        </div>
        <div className="flex-1 bg-gray-300 p-4 overflow-auto">
          <TestCaseArea />
        </div>
      </div>
    </div>
  );
}

export default OverallLayout;
