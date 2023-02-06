import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  const transitionHeader = () => {
    if (window.scrollY > 60) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-3 shadow-md" : "bg-none py-5"
      } fixed z-20 w-screen transition-all duration-200`}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link to={"/"}>
          <div className="w-[40px]"></div>
        </Link>
        <button className="relative" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bag-shopping text-xl"></i>
          <span
            className={`${
              itemAmount > 0 ? "block" : "hidden"
            } absolute -right-2 -bottom-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 p-[1px] text-[12px] text-white`}
          >
            {itemAmount}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
