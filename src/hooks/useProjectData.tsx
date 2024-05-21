/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { cleanJson } from "../utils/parseProjectJSON";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchCSVData();
  }, []);

  const fetchCSVData = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_ALT_URL);
      const data = csvToArr(await res.text(), ",");

      const validData = data.filter(
        (item) =>
          item &&
          // @ts-ignore
          item.consentStatus &&
          // @ts-ignore
          item.consentStatus.includes("I have given consent") &&
          // @ts-ignore
          item.linkedIn &&
          // @ts-ignore
          item.linkedIn.startsWith("https")
      );
      console.log(
        "THIS IS THE DATA: ",
        // @ts-ignore
        validData
      );
      // @ts-ignore
      setCsvData(cleanJson(validData));
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

// const useECommerceProjectsData = () => {
//   const [csvData, setCsvData] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState();

//   useEffect(() => {
//     fetchCSVData();
//   }, []);

//   const fetchCSVData = async () => {
//     try {
//       const res = await fetch(import.meta.env.VITE_ALT_URL);
//       // @ts-ignore
//       const data = csvToArr(await res.text(), ",");
//       // @ts-ignore
//       // TODO: Add category to the csv data
//       const validData  = data.filter((item) => (!!item.consentToDhareRecieved) && (item.kimba === "No Flag"));
//       // @ts-ignore
//       const filteredData = validData.filter((item) => item.description.toLowerCase().includes("e-commerce"));
//       // @ts-ignore
//       setCsvData(filteredData);
//       setLoading(false);
//     } catch (error) {
//       // @ts-ignore
//       setError(error);
//       setLoading(false);
//       console.error("Error fetching csv data", error);
//     }
//   };

//   return { csvData, loading, error };
// };

export default useProjectsData;
