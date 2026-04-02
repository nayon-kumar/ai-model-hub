import React from "react";

const ModelCard = ({ data }) => {
  console.log(data);
  return (
    <div className="border-2 border-gray-200 shadow-xl rounded-2xl overflow-hidden relative">
      <div className="absolute top-5 right-5 z-10">
        <span className="bg-[#E7000B] text-white uppercase px-5 py-1 text-[13px] rounded-full font-bold">
          Popular
        </span>
      </div>
      <div className="bg-[#E4E4E7]">
        <img
          className="h-50 mx-auto p-5 hover:scale-105 transition-all duration-400 ease-in-out"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png"
          alt=""
        />
      </div>
      <div className="p-5">
        <h4 className="text-2xl font-bold">ChatGPT</h4>
        <p className="text-gray-500 my-4">
          The world's most popular AI assistant by OpenAI. Versatile for
          writing, coding, reasoning, and creative tasks.
        </p>
        <p>
          <span className="text-2xl font-bold">$20</span>
          <span className="text-gray-500">/month</span>
        </p>
        <button className="btn w-full mt-5 bg-linear-to-r from-[#F63399] to-[#FA2C38] text-white rounded-full">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
