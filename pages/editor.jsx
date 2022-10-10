import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });

const editor = () => {
  const [postBody, setPostBody] = React.useState("");

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

        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-5 pt-10">EDITOR GOES HERE!</h2>

          <MonacoEditor
            editorDidMount={() => {
              // @ts-ignore
              window.MonacoEnvironment.getWorkerUrl = (_moduleId, label) => {
                if (label === "json") return "_next/static/json.worker.js";
                if (label === "css") return "_next/static/css.worker.js";
                if (label === "html") return "_next/static/html.worker.js";
                if (label === "typescript" || label === "javascript")
                  return "_next/static/ts.worker.js";
                return "_next/static/editor.worker.js";
              };
            }}
            width="800"
            height="600"
            language="markdown"
            theme="vs-dark"
            value={postBody}
            options={{
              minimap: {
                enabled: false
              }
            }}
            onChange={setPostBody}
          />
        </div>
      </div>
    </>
  );
};

export default editor;
