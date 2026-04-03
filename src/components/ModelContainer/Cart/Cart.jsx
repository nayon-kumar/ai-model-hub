import React from "react";
import CartCard from "../../../ui/CartCard/CartCard";

const Cart = ({ cart, setCart }) => {
  return (
    <div className="mt-10">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold">Your Cart</h3>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {cart.map((data) => (
          <CartCard key={data.id} data={data} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
