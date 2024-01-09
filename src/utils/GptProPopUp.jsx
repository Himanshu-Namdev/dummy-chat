import React from 'react';
import { motion } from 'framer-motion';
import lightning from "../assets/lightning.png";
import checkRing from "../assets/Check_ring.png";
import bubble from "../assets/Bubble.png";
import pipe from "../assets/Pipe.png";

const GptProPopUp = ({ isModalOpen2, toggleModal2 }) => {
  if (!isModalOpen2) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md"
      onClick={toggleModal2}
    >
      <motion.div
        className="bg-[#3B4144] rounded-lg p-8"
        style={{ width: 405, height: 528, border: "1px solid #D4D4D4" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        <div className="flex justify-center font-normal text-[24px] items-center text-white">
          <img src={lightning} alt="" className="" />
          <h2 className="mx-2 ">DummyChat Pro</h2>
        </div>
        <div className="flex flex-col items-center my-10">
          <ul className="text-white">
            <li className="flex items-center justify-start my-3 text-[14px] font-normal">
              <img src={checkRing} alt="" className="mx-3" />
              Advance Analytical Results
            </li>
            <li className="flex items-center justify-start my-3 text-[14px] font-normal">
              <img src={bubble} alt="" className="mx-3" />
              Deep Insights from Industry
            </li>
            <li className="flex items-center justify-start my-3 text-[14px] font-normal">
              <img src={pipe} alt="" className="mx-3" />
              Aimed for decision making
            </li>
          </ul>
        </div>
        <h2 className="my-5 text-center text-[13px] font-normal text-white">
          Choose recharge amount
        </h2>
        <div className="flex justify-center items-center w[50%] my-5 gap-5">
          <button
            className="text-[20px] font-normal text-[white] w-[99px] h-[44px] rounded-sm cursor-pointer"
            style={{ border: "1px solid white" }}
          >
            INR 500
          </button>
          <button
            className="text-[20px] font-normal text-[white] w-[99px] h-[44px] rounded-sm cursor-pointer"
            style={{ border: "1px solid white" }}
          >
            INR 1000
          </button>
        </div>
        <div className="flex justify-center ">
          <button className="cursor-pointer my-1 bg-[#C94CDD] text-white text-[14px] font-normal rounded-md w-[65%] h-[40px] text-center">
            Buy DummyChat Pro
          </button>
        </div>
        <div>
          <p className="text-[13px] font-normal text-center my-2 text-white">
            {"(INR 20 per prompt, prepaid system)"}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default GptProPopUp;
