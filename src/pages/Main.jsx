import React from "react";
import logo from "../assets/Turbine.png";
import LandingImage from "../assets/LandingImage.png";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import "../App.css";
export default function landingPage() {
  return (
    <div className=" w-[100vw] h-[100vh] flex justify-center  items-center ">
      <div className=" mx-0 px-0 w-[50%] flex flex-col items-center">
        <div className="heading flex justify-center items-center  my-10">
          <motion.img
            className="w-[35px] h-[35px] mx-3 rotate-360"
            src={logo}
            alt="propgpt"
            whileHover={{ rotate: 360 }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          />
          <h1 className="text-[#C94CDD] text-[35px] font-medium fontFamily-poppins">
            DummyChat
          </h1>
        </div>
        <div className="landingimage">
          <img src={LandingImage} alt="Landing content" />
        </div>
        <h2 className="fontFamily-poppins font-medium text-[36px]">
          Basic Chat Application based on NLU ( NLTK )
        </h2>
        <Link to="/userloggedin">
          <button className="w-[330px] py-[8px] bg-[#C94CDD] text-white fontFamily-poppins font-bold text-[28px] rounded my-5">
            Login/ Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
