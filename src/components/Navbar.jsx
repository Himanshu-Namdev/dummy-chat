import React, { useState } from "react";
import logo from "../assets/User_cicrle.png";
import Turbine from "../assets/Turbine2.png";
import lightning from "../assets/lightning.png";
import GptPopUp from "../utils/GptPopUp";
import GptProPopUp from "../utils/GptProPopUp";
export default function Navbar() {
  const [name, setName] = useState("User"); // here you can set name of user throught login api
  const [isModalOpen1, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen1);
  };
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };

  return (
    <div
      className="w-[100vw] h-[17vh] flex "
      style={{ border: "1px solid #D9D9D9" }}
    >
      <div
        className="left flex justify-center items-center my-auto w-[18%] h-[100%] text-[24px] font-normal"
        style={{ borderRight: "1px solid #D9D9D9" }}
      >
        <img className="w-[32px] h-[32px]" src={logo} alt="logo" />
        <h2>Welcome, {name}!</h2>
      </div>
      <div className="right flex justify-center items-center mx-5 ">
        <div className="buttonSection  h-[85px]  border-[1px] border-solid border-[#D3D3D3] rounded-lg flex justify-evenly items-center text-[19px]  w-[524px] font-medium">
          <button
            className="flex justify-center items-center bg-[#EEEEEE] rounded-md h-[55px] w-[236px] text-[#C94CDD]"
            onClick={toggleModal}
          >
            <span>
              <img src={Turbine} alt="" />
            </span>
            DummyChat: 18
          </button>
          <button
            className="flex justify-center items-center bg-[#3B4144] rounded-md h-[55px] w-[236px] text-[#FFFFFF]"
            onClick={toggleModal2}
          >
            <span>
              <img className="m-[2px]" src={lightning} alt="" />
            </span>
            DummyChat Pro: 11
          </button>
        </div>
      </div>

      {isModalOpen1 && (
        <GptPopUp isModalOpen1={isModalOpen1} toggleModal={toggleModal} />
      )}

      {isModalOpen2 && (
        <GptProPopUp isModalOpen2={isModalOpen2} toggleModal2={toggleModal2} />
      )}
    </div>
  );
}
