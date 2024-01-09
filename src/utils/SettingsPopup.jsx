import React from "react";
import { motion } from "framer-motion";
import setting2 from "../assets/Setting_line2.png";
import vector from "../assets/vector.png";
import turbine3 from "../assets/Turbine3.png";
import lightning from "../assets/lightning2.png";
import paper from "../assets/Paper.png";
import chat from "../assets/Chat.png";
import userCircle from "../assets/Sign_in_circle.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UploadDocumentPopup from "./UploadDocumentPopup";
import  { useState } from 'react';
const SettingsPopup = ({
  isModalOpen,
  closeModal,
  toggleModal,
  toggleModal2,
  isToggled,
  handleToggle,
  componentDidMount,
}) => {
  const location = useLocation();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const openUploadModal = () => {
    setIsUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  };
  return (
    isModalOpen && (
      <div className="modal absolute bottom-[80px] w-[18%] flex items-center justify-center z-50">
        <div className={`modal-content bg-white rounded shadow-lg w-[100%] ${location.pathname === "/Admin" ? "h-[490px]" : "h-[420px]"}`} style={{ border: "1px solid #D4D4D4" }}>
       
          <ul>
            <li
              className="w-[100%] h-[70px] flex items-center px-10"
              style={{ border: "1px solid #D4D4D4" }}
            >
              <img className="mx-3" src={setting2} alt="" />
              <h2
                className="text-[24px] text-[#31C16E] cursor-pointer"
                onClick={closeModal}
              >
                Settings
              </h2>
              <button
                className=" text-black font-bold absolute right-4"
                onClick={closeModal}
              >
                <img src={vector} alt="" />
              </button>
            </li>
            <li
              className="w-[100%] h-[70px] flex items-center px-10"
              style={{ border: "1px solid #D4D4D4" }}
            >
              {" "}
              <img src={turbine3} alt="" className="mx-3" />{" "}
              <button className="text-left text-[24px]" onClick={toggleModal}>
                DummyChat<div className="text-[18px]">Balance : INR 180</div>
              </button>
            </li>

            <li
              className="w-[100%] h-[70px] flex items-center px-10"
              style={{ border: "1px solid #D4D4D4" }}
            >
              {" "}
              <img src={lightning} alt="" className="mx-3" />{" "}
              <button className="text-left text-[24px]" onClick={toggleModal2}>
                DummyChat Pro<div className="text-[18px]">Balance : INR 220</div>
              </button>
            </li>
            <li
              className="w-[100%] h-[70px] flex items-center px-10"
              style={{ border: "1px solid #D4D4D4" }}
            >
              {" "}
              <img src={paper} alt="" className="mx-3" />{" "}
              <button className="text-left text-[24px]">
                My Transactions
                <div className="text-[18px]">Download Invoices</div>
              </button>
            </li>

            {/* upload */}
            {location.pathname === "/Admin" && (
                 
                        <li
                          className="w-[100%] h-[70px] flex items-center px-10"
                          style={{ border: "1px solid #D4D4D4" }}
                        >
                          <img src={paper} alt="" className="mx-3" />
                          <button className="text-left text-[24px]" onClick={openUploadModal}>Upload Docs</button>
                          <UploadDocumentPopup isUploadModalOpen={isUploadModalOpen} closeUploadModal={closeUploadModal} />
                        </li>
                    
              
            )}

            <li
              className="w-[100%] h-[70px] flex items-center px-10"
              style={{ border: "1px solid #D4D4D4" }}
            >
              {" "}
              <img src={chat} alt="" className="mx-3" />{" "}
              <button className="text-left text-[24px]">
                Chat History<div className="text-[18px]">& Training</div>
              </button>
              {/* toggle */}
              <div className="flex items-center absolute right-8">
                <div
                  className={`${
                    isToggled ? "bg-blue-500" : "bg-gray-300"
                  } w-10 h-6 rounded-full cursor-pointer transition-all duration-300`}
                  onClick={handleToggle}
                >
                  <motion.div
                    className={`w-6 h-6 bg-white rounded-full shadow-md`}
                    layout
                    initial={{ x: 1 }}
                    animate={{ x: isToggled ? 18 : 1 }}
                  ></motion.div>
                </div>
              </div>
            </li>

            <li
              className="w-[100%] h-[70px] flex items-center px-10"
              style={{ border: "1px solid #D4D4D4" }}
            >
              {" "}
              <img src={userCircle} alt="" className="mx-3" />{" "}
              <button
                className="text-left text-[24px] text-[#EF4749]"
                onClick={componentDidMount}
              >
                <Link to={"/"}>Logout</Link>
              </button>
            </li>
          </ul>
        </div>
        
      </div>
    )
  );
  
};

export default SettingsPopup;
