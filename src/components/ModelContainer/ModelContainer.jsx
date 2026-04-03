import React, { use, useState } from "react";
import Model from "./Model/Model";
import Cart from "./Cart/Cart";

const ModelContainer = ({ modelPromise, cart, setCart }) => {
  const modelData = use(modelPromise);

  const [selectedBtn, setSelectedBtn] = useState("model");
  const [total, setTotal] = useState(0);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <div className="flex flex-wrap gap-3 items-center justify-center sticky top-[80px] bg-white py-5 z-20">
        <button
          onClick={() => setSelectedBtn("model")}
          className={`btn rounded-full md:px-20 px-10 ${selectedBtn === "model" ? "bg-linear-to-r from-[#F63399] to-[#FA2C38] text-white" : ""} `}
        >
          Model
        </button>
        <button
          onClick={() => setSelectedBtn("cart")}
          className={`btn rounded-full px-10 md:px-20 ${selectedBtn === "cart" ? "bg-linear-to-r from-[#F63399] to-[#FA2C38] text-white" : ""} `}
        >
          Cart ({cart.length})
        </button>
      </div>
      {selectedBtn === "model" ? (
        <>
          <Model
            modelData={modelData}
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        </>
      ) : (
        <>
          <Cart
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        </>
      )}
    </div>
  );
};

export default ModelContainer;
