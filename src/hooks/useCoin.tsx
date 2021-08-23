import React, { useState, useEffect } from "react";
import axios from "axios";
const useCoin = () => {
  const [coins, setCoins] = useState([{ name: "nada", symbol: "nada" }]);
  const [search, setSearch] = useState("");

  const coinsFiltered = coins.filter(
    (c) =>
      c.name.toLocaleLowerCase().includes(search) ||
      c.symbol.toLocaleLowerCase().includes(search)
  );
  const apiRequest = async () => {
    const req = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = req.data;
    setCoins(data);
  };

  useEffect(() => {
    apiRequest();
  }, []);

  return {
    coinsFiltered,
    setSearch,
    search,
  };
};

export default useCoin;
