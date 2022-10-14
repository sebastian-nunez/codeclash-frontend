import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Editor, { useMonaco, loader } from "@monaco-editor/react";

const server = "http://localhost:8000";

const editor = ({ problem }) => {
  const [language, setLanguage] = useState("python");

  const [minutesLeft, setMinutesLeft] = useState(2); // minutes
  const [code, setCode] = useState(problem.starterCode);

  useEffect(() => console.log(problem), []);

  useEffect(() => {
    let timer = null;

    if (minutesLeft > 0) {
      timer = setInterval(() => {
        setMinutesLeft(minutesLeft - 1);
      }, 60000); // 60000ms / 1 min
    }

    return () => clearInterval(timer);
  }, [minutesLeft]);

  const displayTimeLeft = () => {
    if (minutesLeft >= 2) {
      return `${minutesLeft} minutes`;
    } else if (minutesLeft === 1) {
      return `1 minute... Hurry!`;
    } else {
      return "Times up!";
    }
  };

  const handleEditorChange = value => {
    setCode(value);
  };

  const handleSubmit = async () => {
    const body = {
      language: language,
      script: code
    };

    alert(`POST Body: ${JSON.stringify(body)}`);

    const res = await fetch(`${server}/problems/1/response`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  };

  return (
    <>
      <Head>
        <title>Editor</title>
      </Head>

      <div className="flex flex-col w-full md:flex-row">
        <div className="w-full px-6 py-12 md:w-1/3">
          <h2 className="text-2xl font-bold">
            {problem.id}. {problem.title}{" "}
            <span className="text-green-600">({problem.difficulty})</span>
          </h2>

          <br />
          <h4 className="font-bold">Objective:</h4>
          {problem.objectives.map(objective => (
            <>
              <div className="text-sm">{objective}</div>
              <br />
            </>
          ))}

          {problem.examples.map((example, index) => (
            <>
              <h4 className="font-bold">Example {index + 1}</h4>
              <p className="text-sm">
                <strong>Input: </strong>
                {example.input}
              </p>

              <p className="text-sm">
                <strong>Output: </strong>
                {example.output}
              </p>

              {Object.hasOwn(example, "explanation") && (
                <p className="text-sm">
                  <strong>Explanation: </strong>
                  {example.explanation}
                </p>
              )}
              <br />
            </>
          ))}
        </div>

        <div className="w-full md:w-2/3 hidden md:block">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-center pt-10">
              <span>Sebastian</span> vs. <span>Emily</span>
            </h2>
            <p className="text-center">{displayTimeLeft()}</p>
          </div>

          <Editor
            className="border-l-2"
            height="80vh"
            theme="vs"
            defaultLanguage="python"
            language={language}
            defaultValue={code}
            onChange={handleEditorChange}
            options={{
              minimap: {
                enabled: false
              },
              fontFamily: "JetBrains Mono",
              fontSize: 14,
              readOnly: false,
              smoothScrolling: true
            }}
          />

          <div className="flex justify-end w-full">
            <button
              onClick={handleSubmit}
              className="bg-pink-600 mt-3 mx-12 py-1 px-4 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`${server}/problems/1`);
  const problem = await res.json();

  return {
    props: {
      problem
    }
  };
}

export default editor;
