import React from "react";

const WeightInput = ({ criteria, weights, onWeightChange, onCalculate }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Set Weights</h3>
      {criteria.map((criterion, idx) => (
        <div key={idx} className="flex items-center mb-2">
          <label className="w-1/2">{criterion}</label>
          <input
            type="number"
            value={weights[idx]}
            onChange={(e) => onWeightChange(idx, parseFloat(e.target.value))}
            className="border p-2 w-1/2"
          />
        </div>
      ))}
      <button
        onClick={onCalculate}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Calculate Rankings
      </button>
    </div>
  );
};

export default WeightInput;
