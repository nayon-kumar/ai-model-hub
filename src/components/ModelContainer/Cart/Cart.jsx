import CartCard from "../../../ui/CartCard/CartCard";
import { ShoppingCart } from "lucide-react";

const Cart = ({ cart, setCart, total, setTotal }) => {
  const chekcout = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="mt-10">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold">Your Cart</h3>
      </div>
      {cart.length > 0 ? (
        <>
          <div className="mt-10 flex flex-col gap-5">
            {cart.map((data) => (
              <CartCard
                key={data.id}
                data={data}
                cart={cart}
                setCart={setCart}
                total={total}
                setTotal={setTotal}
              />
            ))}
          </div>
          <div className="mt-10 space-y-5">
            <div className="flex items-center justify-between px-5 py-3 bg-[#F4F4F5] rounded-2xl border-2 border-gray-400 text-2xl font-bold">
              <p>Total</p>
              <p>${total}</p>
            </div>
            <button
              onClick={chekcout}
              className="btn w-full bg-green-400 text-white rounded-full"
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mt-10 flex flex-col items-center justify-center">
            <ShoppingCart size={150} className="text-gray-500" />
            <p className="mt-4 text-gray-500">
              Your cart is empty. Go to model tab for add to cart.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
