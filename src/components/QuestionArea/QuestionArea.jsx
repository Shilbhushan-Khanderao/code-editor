import React from "react";

function QuestionArea() {
  return (
    <div className="rounded-md">
      <div>
        <text className="text-xl font-bold">
          Problem: Find Maximum Sum of Non-Adjacent Elements
        </text>
      </div>
      <div className="text-justify">
        <div className="">
          <text className="text-lg font-bold">Statement:</text>
          <br /> You are given an array of integers arr[] where each element
          represents a number. Your task is to find the maximum sum of a
          subsequence with the constraint that no two elements in the
          subsequence should be adjacent in the array. In other words, you need
          to select a subsequence such that no two consecutive elements from the
          array are included in the subsequence, and the sum of the selected
          subsequence is the maximum possible.
        </div>
      </div>
      <div className="text-justify">
        <div className="bg-neutral-700 p-2 rounded mt-2">
          <text className="text-lg mt-5 font-bold">Input Specification:</text>
          <br />
          The first line contains an integer n, the number of elements in the
          array. The second line contains n space-separated integers
          representing the elements of the array arr[].
        </div>
      </div>
      <div className="text-justify">
        <div className="bg-neutral-700 p-2 rounded mt-2">
          <text className="text-lg font-bold">Constraints:</text> <br />
          <ul className="list-disc list-inside mt-2">
            <li>
              <code>1 ≤ n ≤ 10^5 -10^4 ≤ arr[i] ≤ 10^4</code>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-justify">
        <div className="bg-neutral-700 p-2 rounded mt-2">
          <text className="text-lg font-bold">Output Specification:</text>
          <br />
          Print a single integer, the maximum sum of the non-adjacent
          subsequence.
        </div>
      </div>
    </div>
  );
}

export default QuestionArea;
