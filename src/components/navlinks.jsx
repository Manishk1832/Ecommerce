import React from "react";
import Link from "next/link";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { BsFillBagHeartFill, BsCart3 } from "react-icons/bs";

const Navlinks = () => {
  return (
    <div>
      <ul className="flex-row items-center md:flex  gap-[4rem] font-semibold  uppercase  ">
        <li className="md:text-gray-500 md:hover:text-[#395B64]">
          {" "}
          <Link href="/">Home</Link>{" "}
        </li>
        <li className="md:text-gray-500 md:hover:text-[#395B64]">
          {" "}
          <Link href="/products">Products</Link>
        </li>
        <li className="md:text-gray-500 md:hover:text-[#395B64]">
          <Link href="/about">About</Link>
        </li>
        <li className="md:text-gray-500 md:hover:text-[#395B64]">
          <Link href="/contact">Contact</Link>
        </li>

        <li className="relative flex justify-center items-center">
          <Link href="/wishlist" className="flex relative mb-5 mt-5">
            <BsFillBagHeartFill className="text-pink-500 text-xl hover:text-pink-900" />
            <span className="absolute top-[-12px] right-[-12px] bg-[#395B64] text-white rounded-full w-[20px] h-[20px] text-center text-sm">
              1
            </span>
          </Link>
        </li>
        <li className="relative flex justify-center items-center">
          <Link href="/cart" className="flex relative">
            <BsCart3 className=" text-xl text-blue-400 hover:text-blue-900" />
            <span className="absolute top-[-12px] right-[-12px] bg-[#395B64]  text-white rounded-full w-[20px] h-[20px] text-center text-sm">
              10
            </span>
          </Link>
        </li>
        <li className="text-gray-500 hover:text-blue-950 flex items-center justify-center  md:block mt-5 md:mt-0">
          <Link href="/login" className="flex relative">
            <span className="text-xl ">
              <FaRegUser />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
