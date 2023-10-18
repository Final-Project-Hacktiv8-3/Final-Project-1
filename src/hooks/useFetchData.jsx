import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const useFetchData = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_NEWS_URL}/${endpoint}&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
        );
        setData(response.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    getData();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetchData;
