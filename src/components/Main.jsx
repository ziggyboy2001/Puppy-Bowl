import { React, useState, useEffect } from "react";
import { Navbar, Dogs, About } from "./";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const Main = () => {
  const [players, setPlayers] = useState([]);
  async function getDogs() {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players"
      );
      const result = await response.json();
      const puppies = result.data.players;
      console.log(puppies);
      setPlayers(puppies);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getDogs();
  }, []);

  return (
    <div id="main">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dogs players={players} />} />
          <Route path="/about" element={<About players={players} />} />
          <Route path=":id" element={<About players={players} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
//        <Dogs puppies = {puppies}/>
