import React, { useState } from "react";
import Model from "./Model/Model";
import Cart from "./Cart/Cart";

const ModelContainer = () => {
  const [selectedBtn, setSelectedBtn] = useState("model");
  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <button
          onClick={() => setSelectedBtn("model")}
          className={`btn rounded-full px-10 ${selectedBtn === "model" ? "bg-linear-to-r from-[#F63399] to-[#FA2C38] text-white" : ""} `}
        >
          Model
        </button>
        <button
          onClick={() => setSelectedBtn("cart")}
          className={`btn rounded-full px-10 ${selectedBtn === "cart" ? "bg-linear-to-r from-[#F63399] to-[#FA2C38] text-white" : ""} `}
        >
          Cart(0)
        </button>
      </div>
      {selectedBtn === "model" ? (
        <>
          <Model />
        </>
      ) : (
        <>
          <Cart />
        </>
      )}
    </div>
  );
};

export default ModelContainer;
