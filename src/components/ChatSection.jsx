import React, { useState, useEffect } from "react";
import logo from "../assets/Add_square.png";
import setting from "../assets/Setting_line.png";
import send from "../assets/Send_hor.png";
import GptPopUp from "../utils/GptPopUp";
import axios from "axios";
import SettingsPopup from "../utils/SettingsPopup";
import GptProPopUp from "../utils/GptProPopUp";
import ChatItem from "./ChatItem";
export default function ChatSection() {
  const items = [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [data, setData] = useState(items);
  const [isToggled, setIsToggled] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [output, setOutput] = useState("");
  const [imageCode, setImageCode] = useState("");
  let array=[];
  const handleFormSubmit = async (e) => {
    if (e) e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/endpoint", {
        user_input: question,
      });
      if (response.data.response) {
        setOutput(response.data.response);
        if (response.data.image_code) {
          setImageCode(response.data.image_code);
          array=array.push(response.imageCode)
          console.log(array)
        }
        return response.data.response;
      } else {
        throw new Error("API response error");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setOutput(
        "Sorry, either your query was incorrect, or there seems to be a network issue. Please check your internet connection and try again later."
      );
      return "Sorry, either your query was incorrect, or there seems to be a network issue. Please check your internet connection and try again later.";
    }
  };
  useEffect(() => {
    console.log("Image Code Updated:", imageCode);
  }, [imageCode]);

  const toggleModal = () => {
    setIsModalOpen1(!isModalOpen1);
  };
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };
  const [activeIcons, setActiveIcons] = useState(
    Array(items.length).fill(null)
  );
  const toggleHappyIcon = (index) => {
    const updatedIcons = [...activeIcons];
    updatedIcons[index] = updatedIcons[index] === "happy" ? null : "happy";
    setActiveIcons(updatedIcons);
  };
  const toggleSadIcon = (index) => {
    const updatedIcons = [...activeIcons];
    updatedIcons[index] = updatedIcons[index] === "sad" ? null : "sad";
    setActiveIcons(updatedIcons);
  };
  const componentDidMount = () => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function (event) {
      window.history.pushState(null, null, window.location.href);
    };
  };
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const emptyArray = () => {
    setData([]);
    setQuestion("");
  };
  const handleInputChange = (Data) => {
    setQuestion(Data.target.value);
  };
  const setToList = async () => {
    if (question) {
      const response = await handleFormSubmit();
      setData([
        ...data,
        { text: question, isLatestResponse: false },
        { text: response, isLatestResponse: true },
      ]);
      setQuestion("");
    }
  };

  const handleInputEnter = (event) => {
    if (event.key === "Enter") {
      setToList();
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex overflow-hidden">
      <div
        className="sidebar flex flex-col justify-between w-[18%] h-[83vh]"
        style={{ borderRight: "1px solid #D9D9D9" }}
      >
        <div className="top newChat   ">
          <div style={{ borderBottom: "1px solid #D4D4D4 " }}>
            <button
              className="Settings w-[90%] h-[60px] border-[1px] rounded-[10px] border-solid border-[#4E10AA] flex justify-between px-4 text-[24px] font-normal items-center mx-auto my-3"
              onClick={emptyArray}
            >
              New Chat
              <span>
                <img src={logo} alt="" />
              </span>
            </button>
          </div>
        </div>
        {/* settings popup */}
        <SettingsPopup
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          toggleModal={toggleModal}
          toggleModal2={toggleModal2}
          isToggled={isToggled}
          handleToggle={handleToggle}
          componentDidMount={componentDidMount}
        />
        <div
          className="h-[70px] w-[100%] flex justify-start p-5 px-12 items-center text-[24px] font-normal "
          style={{ borderTop: "1px solid #D4D4D4" }}
        >
          <span>
            <img className="w-[24px] h-[24px]" src={setting} alt="" />
          </span>
          <button className="mx-3" onClick={openModal}>
            Settings
          </button>
        </div>
      </div>
      <div
        className="ChatArea w-[82%] h-[83vh] overflow-y-auto  overflow-x-hidden relative inputArea flex flex-col"
        style={{ paddingBottom: "100px" }}
      >
        <div className="content">
          <ul>
            {data.map((item, index) => (
              <ChatItem
                key={index}
                item={item.text}
                index={index}
                toggleHappyIcon={toggleHappyIcon}
                toggleSadIcon={toggleSadIcon}
                activeIcons={activeIcons}
                imageCode={imageCode}
                isLatestResponse={item.isLatestResponse} // new prop
              />
            ))}
          </ul>
        </div>
        <div
          className="input w-[82%] h-[100px] flex justify-center items-center fixed bottom-0 items center bg-white"
          style={{ borderTop: "1px solid #D4D4D4" }}
        >
          <form
            className="w-[100%] flex justify-center"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              className="w-[90%] h-[70px] mx-15 rounded-md border-[1px] border-solid border-[#D4D4D4] px-5 text-[24px] font-normal focus:outline-none focus:border-purple-600 "
              placeholder="Send message here..."
              value={question}
              onChange={handleInputChange}
              onKeyDown={handleInputEnter}
            />
            <button
              className="fixed right-20 mx-10 bottom-10 w-[33px] h-[29px]"
              type="submit"
              onClick={setToList}
            >
              <img src={send} alt="" />
            </button>
          </form>
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
