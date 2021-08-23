import React from "react";
import { Props } from "../interfaces/ApiCoins";

interface prop {
  coins: Props;
  index: number;
}

const Coin = ({ coins, index }: prop) => {
  return (
    <tr className=" bg-dark">
      <td className="text-info">{index}</td>
      <td className="text-info">
        <a
          style={{ textDecoration: "none" }}
          href={`https://www.google.com/search?q=${coins.name} Cryptocurrency`}
        >
          <img
            style={{ width: "3%" }}
            src={coins.image}
            alt={coins.name}
            className="image-fluid"
          />
          <span className="ms-2 text-info">{coins.name}</span>
        </a>
      </td>
      <td className="text-info">{coins.current_price}</td>
      <td className="text-success">{coins.high_24h}</td>
      <td className="text-danger">{coins.low_24h}</td>
      <td
        className={
          coins.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coins.price_change_percentage_24h}
      </td>
    </tr>
  );
};

export default Coin;
