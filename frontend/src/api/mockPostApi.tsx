/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";
import { data } from "react-router-dom";

const FastAPIPostHook = () => {
  const [response, setResponse] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postSomeData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/items/", data);
      setResponse(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting data:", error);
      setIsLoading(false);
    }
  };

  return { response, isLoading, postSomeData };
};

export default FastAPIPostHook;
