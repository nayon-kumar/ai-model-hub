import React from "react";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

const CartCard = ({ data, cart, setCart, total, setTotal }) => {
  const deleteItem = (item) => {
    toast.success(`${item.title} Deleted!`);
    setTotal(total - item.price);
    const filteredItem = cart.filter((cartItem) => cartItem.id != item.id);
    setCart(filteredItem);
  };

  console.log(data);
  return (
    <div className="border-2 border-gray-300 hover:border-gray-500 rounded-2xl bg-[#F4F4F5] flex gap-4 items-center justify-between p-5 relative">
      <div
        onClick={() => deleteItem(data)}
        className="absolute top-5 right-5 bg-white border-2 border-gray-200 rounded-full p-1"
      >
        <div className="text-red-500 cursor-pointer">
          <Trash2 size={30} />
        </div>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <div className="shrink-0">
          <img
            className="h-20 w-20 sm:h-30 sm:w-30 shrink-0"
            src={data.image}
            alt={data.title}
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl">{data.title}</h3>
          <p className="text-gray-500 mt-2">{data.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 items-center justify-between  md:w-auto">
        <div>
          <h3 className="text-2xl font-bold lg:mt-5">${data.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
