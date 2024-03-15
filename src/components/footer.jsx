"use client";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#395B64] text-white  md:h-[70vh]  xl:h-[40vh] flex flex-col justify-center items-center">
      {/* container */}
      <div className="container ">
        {/* row */}
        <div className="md:flex flex-row justify-center md:gap-[3rem] xl:gap-[8rem] text-center">
          {/* column */}
          <div className="mt-2 ">
            <h2 className="md:text-lg font-bold uppercase ">About</h2>
            <p className="text-sm text-wrap mt-2 leading-[20px] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem{" "}
              <br />
              dolorem maxime repudiandae, voluptatum aliquam accusamus tempora{" "}
              <br />
              praesentium dolores eligendi odit, quaerat, enim fugiat porro sit{" "}
              <br />
              modi. Illum laudantium tenetur veniam.
            </p>
            <div className=" mb-4"></div>

            <p className="">
              <span className="">
                <IoIosLock />
              </span>
              Secure online payment
            </p>
          </div>

          {/* column */}
          <div className="mt-2">
            <h2 className="uppercase text-l font-bold">Categories</h2>
            <ul className="md:mt-2">
              <li>
                <a href="#">Hoodie</a>
              </li>
              <li>
                <a href="#">T-Shirt</a>
              </li>
              <li>
                <a href="#">Tops</a>
              </li>
              <li>
                <a href="#">SweetShirt</a>
              </li>
            </ul>
          </div>

          {/* column */}
          <div className="mt-4 md:mt-2 ">
            <h2 className="text-lg font-bold uppercase">Information</h2>
            <ul className="md:mt-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Return & Exchange </a>
              </li>
              <li>
                <a href="#">Shipping & Delivery</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* column */}
          <div className="mt-4 md:mt-2 ">
            <h2 className="text-lg font-bold uppercase">Contact</h2>
            {/* address */}
            <div className="flex gap-1 mt-2 justify-center">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              Address:Rc-379 Noida,uttar pradesh India,
              <br /> Pin-Code: 201301
            </div>
            {/* Phone */}
            <div className="flex gap-1 mt-2 justify-center">
              {" "}
              <span className="text-lg">
                <FaPhone />
              </span>
              Phone: +91 1234567890
            </div>

            {/* email */}
            <div className="flex gap-1 mt-2 justify-center">
              <span className="text-xl">
                <MdEmail />
              </span>
              Email: 3t5Z7@example.com
            </div>

            {/* social icons */}
            <div className="flex  justify-center mb-4  gap-5   md:gap-4 text-xl mt-10 md:mt-4 ">
              <a href="#">
                <span>
                  <FaFacebook />{" "}
                </span>
              </a>
              <a href="#">
                <span>
                  <FaTwitter />
                </span>
              </a>
              <a href="#">
                <span>
                  <FaInstagram />
                </span>
              </a>
              <a href="#">
                <span>
                  <FaYoutube />
                </span>
              </a>
              <a href="">
                <span>
                  <FaLinkedin />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="mt-8">
        <div className="text-center">
          <p>
            Copyright ©{new Date().getFullYear()} - All Rights Reserved Dimank
            Fashion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
