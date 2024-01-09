import React from "react";
import Navbar from "../components/Navbar"
import ChatSection from "../components/ChatSection";
export default function userloggedin({isAdmin}) {
  return (
    <div className="overflow-none">
      <Navbar/>
      <ChatSection/>
    </div>
  );
}
