import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Coin.css";
import DOMPurify from "dompurify";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { name, market_cap_rank, image, symbol, market_data, description } =
    coin;
  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {image ? <img src={image.small} alt="" /> : null}
              <p>{name}</p>
              {symbol ? <p>{symbol.toUpperCase()}/NGN</p> : null}
            </div>
            <div className="coin-price">
              {market_data?.current_price ? (
                <h1>&#8358;{market_data.current_price.ngn.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {market_data?.low_24h ? (
                  <p>&#8358;{market_data.low_24h.ngn.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {market_data?.high_24h ? (
                  <p>&#8358;{market_data.high_24h.ngn.toLocaleString()}</p>
                ) : null}
              </div>
            </div>

            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {market_data?.market_cap ? (
                  <p>&#8358;{market_data.market_cap.ngn.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {market_data ? <p>{market_data.circulating_supply}</p> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description ? description.en : ""),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
