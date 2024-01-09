import React from 'react';
import User from "../assets/User_cicrle1.png";
import Turbine from "../assets/Turbine.png";
import happy from "../assets/happy.png";
import happyfill from "../assets/happyfill.png";
import sad from "../assets/Sad.png";
import sadfill from "../assets/sadfill.png";
const m1="";
const ChatItem = ({
  item,
  index,
  toggleHappyIcon,
  toggleSadIcon,
  activeIcons,
  imageCode,
  isLatestResponse, 
}) => {
  const renderImage = () => {
    if (imageCode === "m1" && isLatestResponse) {
      return (
        <img
          src={m1}
          className="w-[400px] h-[500px] my-3 mx-auto"
          alt=""
        />
      );
    }
    return null; // If imageCode doesn't match or it's not the latest response, return null
  };

  const renderQuerySection = () => (
    <div className="query-section flex items-center bg-[#EAEAEA] w-[100%] h-[13vh] ">
      <img src={User} alt="" className="w-[40px] min-h-[40px] " style={{marginLeft:"80px", marginRight:"40px"}}/>
      {item}
    </div>
  );

  const renderResponseSection = () => {
    return (
      <div className="response-section w-[90%] flex flex-col p-10">
        {renderImage()} 
        <div className="flex items-center">
          <img src={Turbine} alt="" className="w-[40px] min-h-[40px] mx-10" />
          {item}
          <div className="icons">
            {activeIcons[index] === "happy" ? (
              <img
                src={happyfill}
                alt=""
                className="w-[24px] h-[24px] mx-5 cursor-pointer absolute right-20"
                onClick={() => toggleHappyIcon(index)}
              />
            ) : (
              <img
                src={happy}
                alt=""
                className="w-[24px] h-[24px] mx-5 cursor-pointer absolute right-20"
                onClick={() => toggleHappyIcon(index)}
              />
            )}
            {activeIcons[index] === "sad" ? (
              <img
                src={sadfill}
                alt=""
                className="w-[24px] h-[24px] mx-5 cursor-pointer absolute right-5"
                onClick={() => toggleSadIcon(index)}
              />
            ) : (
              <img
                src={sad}
                alt=""
                className="w-[24px] h-[24px] mx-5 cursor-pointer absolute right-5"
                onClick={() => toggleSadIcon(index)}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <li
      className={`w-[100%] min-h-[13vh] max-h-[700px] text-justify bg-${
        index % 2 === 0 ? "#EAEAEA" : "#FFFFFF"
      } flex items-center  text-[20px] font-normal`}
      key={index}
    >
      {index % 2 === 0 ? renderQuerySection() : renderResponseSection()}
    </li>
  );
};

export default ChatItem;
