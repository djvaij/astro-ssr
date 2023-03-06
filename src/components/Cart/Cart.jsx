import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import {
  isCartOpen,
  shoppingCart,
  toggleCart,
  total,
  clearCart,
  closeCart,
} from "../../store/cartStore";
import { Product } from "./Product";
import { CartIcon } from "./CartIcon";

export const Cart = () => {
  const $isCartOpen = useStore(isCartOpen);
  const products = useStore(shoppingCart);
  const $total = useStore(total);

  const toggleCartHandler = (e) => {
    e.stopPropagation();
    toggleCart();
  };

  const closeCartHandler = () => {
    closeCart();
  };

  useEffect(() => {
    window.addEventListener("click", closeCartHandler);

    return () => window.removeEventListener("click", closeCartHandler);
  });

  return (
    <div className="relative">
      <button onClick={toggleCartHandler}>
        <CartIcon />
      </button>
      {$isCartOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute z-10 -right-1 top-[100%] w-96 p-4 rounded-md border border-gray-400 bg-slate-50 shadow-xl"
        >
          <h4 className="text-center mb-2 pb-2 border-b border-gray-300">
            Cart
          </h4>
          {!products.length && <p className="text-center">No items in cart</p>}
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          <footer className="flex justify-between border-t border-gray-300 mt-2 pt-2">
            <button
              onClick={clearCart}
              className="hover:text-orange-400 transition"
            >
              Clear
            </button>{" "}
            $ {$total}
          </footer>
        </div>
      )}
    </div>
  );
};
