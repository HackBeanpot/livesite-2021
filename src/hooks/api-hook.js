import { useState, useEffect } from "react";

const useAirtableAPI = (basePath, tableQuery) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = new URL(
      `https://api.airtable.com/v0/${basePath}/${tableQuery}?api_key=${process.env.REACT_APP_AIRTABLE_KEY}`
    );

    const getData = async () => {
      const responseData = await fetch(url);
      const responseJson = await responseData.json();
      setIsLoading(false);
      setData(responseJson.records);
    };

    try {
      getData();
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, [basePath, tableQuery]);

  return { data, isLoading };
};

export default useAirtableAPI;
