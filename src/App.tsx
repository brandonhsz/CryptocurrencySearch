import React, { useState } from "react";
import TableCoins from "./components/TableCoins";
import useCoin from "./hooks/useCoin";

function App() {
  const { coinsFiltered, setSearch, search } = useCoin();

  //prettier-ignore
  return (
    <div className="container">


      <input 
        type="text" 
        placeholder="Search"
        className="form-control bg-dark text-center border-0 p-2 mt-3 text-white"
        value={search.toUpperCase()}
        onChange={e => setSearch(e.target.value)}
      />

      {coinsFiltered.length === 0 ? (  <h2 className="text-center text-danger h1">No hay elementos</h2> ) 

      : 
        <TableCoins
           coins={coinsFiltered}
        />
      }

     
      
    </div>
  );
}

export default App;
