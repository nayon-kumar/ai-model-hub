import React from "react";

const ModelCard = ({ data, cart, setCart }) => {
  const handleClick = (item) => {
    const isExist = cart.some((cartItem) => cartItem.id === item.id);
    if (!isExist) {
      setCart([...cart, item]);
    }
  };

  return (
    <div className="border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden relative">
      <div className="absolute top-5 right-5 z-10">
        <span
          className={`text-white uppercase px-3 py-1 text-[15px] rounded-full font-bold ${data.status === "🔥 popular" ? "bg-[#FA2E43]" : data.status === "❤️ favourite" ? "bg-[#FF6900]" : "bg-[#FE9A00]"}`}
        >
          {data.status}
        </span>
      </div>
      <div className="bg-[#E4E4E7]">
        <img
          className="h-50 w-50 mx-auto p-7 hover:scale-110 transition-all duration-400 ease-in-out"
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className="p-5">
        <h4 className="text-2xl font-bold">{data.title}</h4>
        <p className="text-gray-500 my-4 line-clamp-2">{data.description}</p>
        {data.price === 0 ? (
          <>
            <p className="text-2xl font-bold text-green-500">Free</p>
          </>
        ) : (
          <>
            <p>
              <span className="text-2xl font-bold">${data.price}</span>
              <span className="text-gray-500">/month</span>
            </p>
          </>
        )}

        <button
          onClick={() => handleClick(data)}
          className="btn w-full mt-5 bg-linear-to-r from-[#F63399] to-[#FA2C38] text-white rounded-full"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
