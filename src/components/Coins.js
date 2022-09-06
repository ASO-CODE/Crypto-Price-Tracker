import React from "react";
import CoinItem from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
import Buttons from "./Buttons";
import Search from "./Search";

const Coins = ({
  coins,
  page,
  prevPage,
  nextPage,
  handlePage,
}) => {

  const [search, setSearch] = React.useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <Search handleChange={handleChange} />
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
        {filteredCoins.map((coin, index) => {
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <CoinItem coin={coin} />
            </Link>
          );
        })}
      </div>

      <Buttons
        coins={coins}
        page={page}
        handlePage={handlePage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default Coins;
