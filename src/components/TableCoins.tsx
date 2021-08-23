import React from "react";
import { Props } from "../interfaces/ApiCoins";
import Coin from "./Coin";

const TableCoins = ({ coins }: any) => {
  const titles = [
    "#",
    "Name",
    "Current Price",
    "Highest 24h",
    "Lowest 24h",
    "Change Percentage 24h",
  ];

  return (
    <table className="table table-dark table-hover mt-4 border border-dark">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {coins.map((coins: Props, index: number) => (
          <Coin key={index} coins={coins} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
