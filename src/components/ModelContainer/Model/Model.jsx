import React from "react";
import ModelCard from "../../../ui/ModelCard/ModelCard";

const Model = ({ modelData }) => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Choose Your AI Model</h3>
        <p className="mt-4 text-gray-500">
          One subscription gives you access to all frontier AI models
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {modelData.map((data) => (
          <ModelCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Model;
