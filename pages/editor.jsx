import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Editor, { useMonaco, loader } from "@monaco-editor/react";
import PromptPanel from "../components/PromptPanel";

const URL = "http://localhost:8000";

const editorConfig = {
  theme: "vs",
  height: "80vh",
  defaultLanguage: "python",
  options: {
    minimap: {
      enabled: false
    },
    fontFamily: "JetBrains Mono",
    fontSize: 14,
    readOnly: false,
    smoothScrolling: true
  }
};

const editor = ({ problemData }) => {
  const [language, setLanguage] = useState("python");

  const [minutesLeft, setMinutesLeft] = useState(2); // minutes
  const [code, setCode] = useState(problemData.starterCode);

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

    const res = await fetch(`${URL}/submissions/1`, {
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
        <PromptPanel {...problemData} />

        <div className="w-full md:w-2/3 hidden md:block">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-center pt-10">
              <span>Sebastian</span> vs. <span>Emily</span>
            </h2>
            <p className="text-center">{displayTimeLeft()}</p>
          </div>

          <Editor
            className="border-l-2"
            language={language}
            defaultValue={code}
            onChange={handleEditorChange}
            defaultLanguage={editorConfig.defaultLanguage}
            height={editorConfig.height}
            theme={editorConfig.theme}
            options={editorConfig.options}
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
  const res = await fetch(`${URL}/problems/1`);
  const data = await res.json();

  return {
    props: {
      problemData: data
    }
  };
}

export default editor;
