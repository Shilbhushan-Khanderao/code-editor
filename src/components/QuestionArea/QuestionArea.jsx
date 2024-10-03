import React from "react";

function QuestionArea() {
  return (
    <div className="rounded-md">
      <div>
        <b>Problem Title: Find Maximum Sum of Non-Adjacent Elements Problem</b>
      </div>

      <div className="text-justify">
        <b>Statement:</b>
        <br /> You are given an array of integers arr[] where each element
        represents a number. Your task is to find the maximum sum of a
        subsequence with the constraint that no two elements in the subsequence
        should be adjacent in the array. In other words, you need to select a
        subsequence such that no two consecutive elements from the array are
        included in the subsequence, and the sum of the selected subsequence is
        the maximum possible.
      </div>
      <div className="text-justify">
        <b>Input Specification:</b>
        The first line contains an integer n, the number of elements in the
        array. The second line contains n space-separated integers representing
        the elements of the array arr[].
      </div>
      <div className="text-justify">
        <b>Constraints:</b> <br /> 1 ≤ n ≤ 10^5 -10^4 ≤ arr[i] ≤ 10^4
      </div>
      <div className="text-justify">
        <b>Output Specification:</b> <br />
        Print a single integer, the maximum sum of the non-adjacent subsequence.
      </div>
    </div>
  );
}

export default QuestionArea;
