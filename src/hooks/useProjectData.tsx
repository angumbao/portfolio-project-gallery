/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";

function csvToArr(stringVal: string, splitter: string) {
  const [keys, ...rest] = stringVal
    .trim()
    .split("\n")
    .map((item) => item.split(splitter));

  const formedArr = rest.map((item) => {
    const object = {};
    // @ts-ignore
    keys.forEach((key, index) => (object[key] = item.at(index)));
    return object;
  });
  return formedArr;
}

const useProjectsData = () => {
  const [csvData, setCsvData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetchCSVData();
  }, []);

  const fetchCSVData = async () => {
    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_ALT_URL);
      console.log(res);
      // @ts-ignore
      setCsvData(csvToArr(await res.text(), ","));
      setLoading(false);
    } catch (error) {
      // @ts-ignore
      setError(error);
      setLoading(false);
      console.error("Error fetching csv data", error);
    }
  };

  return { csvData, loading, error };
};

export default useProjectsData;
