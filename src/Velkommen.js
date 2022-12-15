import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://data.ssb.no/api/v0/no/table/";
const Velkommen = ({ setStep, setGlobalName }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(null);
  async function getData() {
    axios.get(baseURL + "10467").then((response) => {
      const min = 0;
      const max = response.data.variables[0].valueTexts.length;
      const fornavnRand = (min + Math.random() * (max - min)).toFixed(0);
      const fornavn = response.data.variables[0].valueTexts[fornavnRand];
      const etternavnRand = (min + Math.random() * (max - min)).toFixed(0);
      const etternavn =
        response.data.variables[0].valueTexts[etternavnRand] + "sen";
      setUsername(fornavn + " " + etternavn);
    });
  }
  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, []);
  const handleSumbit = () => {
    setGlobalName(username);
    setStep(1);
  };
  if (loading) {
    return <p>Loading..</p>;
  }
  return (
    <>
      <h1>Velkommen, Ditt bruker navn er:{username}</h1>
      <button onClick={() => getData()}>Nytt Navn</button>
      <button onClick={handleSumbit}>Gå Videre</button>
    </>
  );
};

export default Velkommen;
