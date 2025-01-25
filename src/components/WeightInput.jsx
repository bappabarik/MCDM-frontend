import React from "react";

const WeightInput = ({ criteria, weights, onWeightChange, onCalculate, onCriteriaTypeChange, criteriaType }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Set Weights</h3>
      {criteria.map((criterion, idx) => (
        <div key={idx} className="flex items-center justify-center gap-2 mb-2">
          <label className="w-1/2">{criterion}</label>
          <input
            type="number"
            value={weights[idx]}
            onChange={(e) => onWeightChange(idx, parseFloat(e.target.value))}
            className="border p-2 w-1/2"
          />
           <select
            value={criteriaType[idx]}
            className="border p-2 w-1/2"
            onChange={(e) => onCriteriaTypeChange(idx, e.target.value)}
          >
            <option value="benefit">Benefit</option>
            <option value="cost">Cost</option>
          </select>
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
