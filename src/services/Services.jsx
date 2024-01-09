import axios from 'axios';
import { useState } from 'react';

const Services = (question) => {
  const [output, setOutput] = useState("");
  const [imageCode, setImageCode] = useState("");

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

  return { output, imageCode, handleFormSubmit };
};

export default Services;
