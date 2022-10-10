import React from "react";
import Head from "next/head";
import { useState } from "react";
import Editor, { useMonaco, loader } from "@monaco-editor/react";

const editor = () => {
  const [code, setCode] = useState(
    `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Code here...
        pass
    `
  );

  const [language, setLanguage] = useState("python");

  const handleEditorChange = value => {
    setCode(value);
    console.log(value);
  };

  return (
    <>
      <Head>
        <title>Editor</title>
      </Head>

      <div className="flex flex-col w-full md:flex-row">
        <div className="w-full px-6 py-12 md:w-1/3">
          <h2 className="text-xl font-bold">1. Two Sum</h2>
          <p className="text-green-600">(Easy)</p>

          <br />
          <h4 className="font-bold">Objective:</h4>
          <div className="">
            <div>
              Given an array of integers nums and an integer target, return
              indices of the two numbers such that they add up to target.
            </div>
            <br />
            <div>
              You may assume that each input would have exactly one solution,
              and you may not use the same element twice.
            </div>
            <br />
            <div>You can return the answer in any order.</div>
          </div>

          <br />
          <h4 className="font-bold">Example 1</h4>
          <p className="text-sm">
            <strong>Input: </strong>nums = [2,7,11,15], target = 9
          </p>

          <p className="text-sm">
            <strong>Output: </strong>[0,1]
          </p>

          <p className="text-sm">
            <strong>Explanation: </strong>Because nums[0] + nums[1] == 9, we
            return [0, 1].
          </p>

          <br />
          <h4 className="font-bold">Example 2</h4>
          <p className="text-sm">
            <strong>Input: </strong>nums = [3,2,4], target = 6
          </p>

          <p className="text-sm">
            <strong>Output: </strong>[1,2]
          </p>

          <br />
          <h4 className="font-bold">Example 3</h4>
          <p className="text-sm">
            <strong>Input: </strong>nums = [3,3], target = 6
          </p>

          <p className="text-sm">
            <strong>Output: </strong>[0,1]
          </p>
        </div>

        <div className="w-full md:w-2/3 hidden md:block">
          <h2 className="text-3xl font-bold text-center mb-5 py-10">
            Sebastian vs. BOT
          </h2>
          <div className="border-l-2">
            <Editor
              height="80vh"
              defaultLanguage={language}
              defaultValue={code}
              onChange={handleEditorChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default editor;
