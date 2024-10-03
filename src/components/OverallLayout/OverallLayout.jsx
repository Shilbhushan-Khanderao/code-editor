"use client";
import React, { useState } from "react";
import QuestionArea from "../QuestionArea/QuestionArea";
import OutputArea from "../OutputArea/OutputArea";
import TestCaseArea from "../TestCaseArea/TestCaseArea";
import CodeEditor from "../CodeEditor/CodeEditor";
import CodeTimer from "../Timer/CodeTimer";

function OverallLayout() {
  const [questionWidth, setQuestionWidth] = useState(40);
  const [editorWidth, setEditorWidth] = useState(60);
  const [topHeight, setTopHeight] = useState(80);
  const [bottomHeight, setBottomHeight] = useState(20);
  const [isDragging, setIsDragging] = useState(false);

  const handleHorizontalDrag = (e) => {
    e.preventDefault();
    const newQuestionWidth = (e.clientX / window.innerWidth) * 100;
    const newEditorWidth = 100 - newQuestionWidth;

    if (newQuestionWidth > 25 && newEditorWidth > 50) {
      setQuestionWidth(newQuestionWidth);
      setEditorWidth(newEditorWidth);
    }
  };

  const handleVerticalDrag = (e) => {
    e.preventDefault();
    const newTopHeight = (e.clientY / window.innerHeight) * 100;
    const newBottomHeight = 100 - newTopHeight;

    if (newTopHeight > 30 && newBottomHeight > 20) {
      setTopHeight(newTopHeight);
      setBottomHeight(newBottomHeight);
    }
  };

  const handleMouseDownHorizontal = () => {
    setIsDragging(true);
    document.addEventListener("mousemove", handleHorizontalDrag);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownVertical = () => {
    setIsDragging(true);
    document.addEventListener("mousemove", handleVerticalDrag);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleHorizontalDrag);
    document.removeEventListener("mousemove", handleVerticalDrag);
    document.removeEventListener("mouseup", handleMouseUp);
  };
  return (
    <div className={`flex flex-col h-screen ${isDragging ? "no-select" : ""}`}>
      {/* <div>
        <CodeTimer />
      </div> */}
      <div className="flex w-full" style={{ height: `${topHeight}%` }}>
        <div
          className="relative bg-gray-950 p-2 mt-2 overflow-auto text-ellipsis"
          style={{ width: `${questionWidth}%` }}
        >
          <QuestionArea />
        </div>
        <div
          className="w-2 bg-gray-400 gutter gutter-horizontal"
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
        className="h-2 bg-gray-400 gutter gutter-vertical"
        onMouseDown={handleMouseDownVertical}
      ></div>
      <div
        className="flex flex-col md:flex-row w-full"
        style={{ height: `${bottomHeight}%` }}
      >
        <div className="flex-1 bg-gray-200 p-1 overflow-auto">
          <OutputArea />
        </div>
        <div className="flex-1 bg-gray-300 p-1 overflow-auto">
          <TestCaseArea />
        </div>
      </div>
    </div>
  );
}

export default OverallLayout;
