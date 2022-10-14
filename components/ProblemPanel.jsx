import React from "react";

function problemPanel({ id, title, difficulty, objectives, examples }) {
  return (
    <div className="w-full px-6 py-12 md:w-1/3">
      <h2 className="text-2xl font-bold">
        {id}. {title} <span className="text-green-600">({difficulty})</span>
      </h2>

      <br />
      <h4 className="font-bold">Objective:</h4>
      {objectives.map(objective => (
        <>
          <div className="text-sm">{objective}</div>
          <br />
        </>
      ))}

      {examples.map((example, index) => (
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
  );
}

export default problemPanel;
