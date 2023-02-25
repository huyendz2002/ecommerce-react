import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import CartItem from "./CartItem";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflowY = "hidden";
  //   } else {
  //     document.body.style.overflowY = "unset";
  //   }
  // }, [isOpen]);

  return (
    // sidebar container
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } fixed top-0 z-30 h-full w-full bg-white px-4 shadow-2xl transition-all duration-[350ms] ease-in-out md:w-[50vw] lg:max-w-[50vw] lg:px-[35px] xl:max-w-[38vw] 3xl:max-w-[28vw]`}
    >
      {/* shopping bag header */}
      <div className="flex h-[10%] min-h-[50px] items-center justify-between border-b">
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
        >
          <i className="fa-solid fa-arrow-right text-xl"></i>
        </div>
      </div>
      <div className="flex h-[90%] flex-col justify-between">
        {/* cart item container */}
        <div className=" flex flex-1 flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        {/* sidebar footer container */}
        <div className="mt-4 flex flex-col gap-y-3 py-5">
          <div className="flex w-full items-center justify-between ">
            {/* total */}
            <div className="font-semibold uppercase">
              <span className="mr-2">Total: </span>$ {total.toFixed(2)}
            </div>
            {/* clear cart icon */}
            <button
              className="group bg-red-500 px-3 py-2 text-white outline-2 outline-black duration-200 hover:bg-white"
              onClick={clearCart}
            >
              <i className="fa-regular fa-trash-can group-hover:text-red-500"></i>
            </button>
          </div>
          <Link className="bg-primary py-4 text-center font-semibold text-white">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
