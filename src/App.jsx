import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import WeightInput from "./components/WeightInput";
import RankingChart from "./components/RankingChart";
import axios from "axios";

const App = () => {
  const [criteria, setCriteria] = useState([]);
  const [alternatives, setAlternatives] = useState([]);
  const [weights, setWeights] = useState([]);
  const [rankings, setRankings] = useState([]);

  const handleUploadSuccess = (data) => {
    setCriteria(data.criteria);
    setAlternatives(data.alternatives);
    setWeights(data.weights);
  };

  const handleWeightChange = (idx, value) => {
    const updatedWeights = [...weights];
    updatedWeights[idx] = value;
    setWeights(updatedWeights);
  };

  const calculateRankings = async () => {
    try {
      const { data } = await axios.post("https://mcdm.onrender.com/api/calculate", {
        alternatives,
        weights,
        criteriaType: Array(criteria.length).fill("benefit"), // Assuming all criteria are benefit type
      });

      setRankings(data.rankings);
      console.log(data.rankings);
      
    } catch (error) {
      console.error("Error calculating rankings:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Multi-Criteria Decision Making</h1>
      <FileUpload onUploadSuccess={handleUploadSuccess} />
      {criteria.length > 0 && (
        <WeightInput
          criteria={criteria}
          weights={weights}
          onWeightChange={handleWeightChange}
          onCalculate={calculateRankings}
        />
      )}
      {rankings.length > 0 && <RankingChart rankings={rankings} />}
    </div>
  );
};

export default App;

