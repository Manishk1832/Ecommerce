"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navlinks from "./navlinks";

import { CgMenu, CgClose } from "react-icons/cg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    /* Container */
    <div className="bg-[#F9F9F9] h-[10vh] ">
      {/* header */}
      <div className="flex justify-between px-8  items-center">
        {/* Logo */}
        <div className="  mix-blend-multiply relative h-[10vh] w-[10vh]">
          <Image
            src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Menu */}
        <div className="hidden md:block">
          <Navlinks />
        </div>

        {/* Hamburger responsive */}
        <div className="md:hidden">
          {/* hamburger icon */}
          <button onClick={() => setOpen(!open)}>
            <span className="text-3xl">
              <CgMenu />
            </span>
          </button>
        </div>

        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-cyan-900 text-white flex items-center justify-center gap-8 text-4xl z-40">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-3xl"
            >
              <CgClose />
            </button>
            <Navlinks />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
