import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import paginate from "./utils";

function App() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(0);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=250&page=1&sparkline=false";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(paginate(response.data)[page]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handlePage = (index) => {
    setPage(index);
  };

  
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > coins.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((newPage) => {
      let prevPage = newPage - 1;
      if (prevPage < 0) {
        prevPage = coins.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Coins
              coins={coins}
              page={page}
              handlePage={handlePage}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          }
        />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
