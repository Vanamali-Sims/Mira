/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";

const FastAPIGetHook = () => {
  const [response, setResponse] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSomeData = async () => {
    setIsLoading(true);
    await axios
      .get("http://127.0.0.1:8000/api/events")
      .then((response) => {
        setResponse(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  return { response, isLoading, getSomeData };
};

export { FastAPIGetHook };
