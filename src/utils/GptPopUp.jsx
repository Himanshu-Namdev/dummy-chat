import React from 'react';
import { motion } from 'framer-motion';
import Turbine from '../assets/Turbine2.png'; // replace with your actual import path
import eye from '../assets/Eye.png'; // replace with your actual import path
import database from '../assets/Database.png';
import progress from '../assets/Progress.png'; // replace with your actual import path

const GptPopUp = ({ isModalOpen1, toggleModal }) => {
  return (
    isModalOpen1 && (
      <div
        className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md"
        style={{ backgroundColor: "rgba(12, 9, 14, 0.7)" }}
        onClick={toggleModal}
      >
        <motion.div
          className="bg-[#D9D9D9] rounded-lg p-8"
          style={{ width: 405, height: 528, border: "1px solid #D4D4D4" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <div className="flex justify-center font-normal text-[24px] items-center">
            <img src={Turbine} alt="" className="" />
            <h2 className="mx-2">DummyChat</h2>
          </div>
          <div className="flex flex-col items-center my-10">
            <ul>
              <li className="flex items-center justify-start my-3 text-[14px] font-normal">
                <img src={eye} alt="" className="mx-3" />
                Indicative Results
              </li>
              <li className="flex items-center justify-start my-3 text-[14px] font-normal">
                <img src={database} alt="" className="mx-3" />
                Base Industry Knowledge
              </li>
              <li className="flex items-center justify-start my-3 text-[14px] font-normal">
                <img src={progress} alt="" className="mx-3" />
                Aimed for General Information
              </li>
            </ul>
          </div>
          <h2 className="my-5 text-center text-[13px] font-normal">
            Choose recharge amount
          </h2>
          <div className="flex justify-center items-center w[50%] my-5 gap-5">
            <button className="text-[20px] font-normal text-[#C94CDD] w-[99px] h-[44px] bg-white rounded-sm cursor-pointer">
              INR 250
            </button>
            <button className="text-[20px] font-normal text-[#C94CDD] w-[99px] h-[44px] bg-white rounded-sm cursor-pointer">
              INR 500
            </button>
          </div>
          <div className="flex justify-center">
            <button className="cursor-pointer my-1 bg-[#3B4144] text-white text-[14px] font-normal rounded-md w-[65%] h-[40px] text-center">
              Buy DummyChat
            </button>
          </div>
          <div>
            <p className="text-[13px] font-normal text-center my-2">
              {"(INR 10 per prompt, prepaid system)"}
            </p>
          </div>
        </motion.div>
      </div>
    )
  );
};

export default GptPopUp;
