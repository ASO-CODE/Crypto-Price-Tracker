import React from "react";
import './Coins.css'
const CoinItem = ({ coin }) => {
  const {
    market_cap_rank,
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
    market_cap,
  } = coin;
  return (
    <div className="coin-row">
      <p>{market_cap_rank}</p>
      <div className="img-symbol">
        <img src={image} alt="" />
        <p>{symbol.toUpperCase()}</p>
      </div>
      <p>&#8358;{current_price.toLocaleString()}</p>
      {price_change_percentage_24h < 0 ? (
        <p className="red">{price_change_percentage_24h.toFixed(4)}%</p>
      ) : (
        <p className="green">{price_change_percentage_24h.toFixed(4)}%</p>
      )}
      <p className="hide-mobile">&#8358;{total_volume.toLocaleString()}</p>
      <p className="hide-mobile">&#8358;{market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
