import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";

const About = () => {
  let { id } = useParams();

  const [player, setPlayer] = useState([]);
  async function getDogs() {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players/${id}`
      );
      const result = await response.json();
      const puppies = result.data.player;
      setPlayer(puppies);
    } catch (err) {
      console.error(err);
    }
  }
  getDogs();

  return (
    <div className="aboutCardFull">
      <div className="aboutCard">
        <p>Name: {player.name}</p>
        <p>ID#: {player.id}</p>
        <p>Status: {player.status}</p>
        <p>
          <img className="aboutCardImg" src={player.imageUrl} />
        </p>
        <Link to="/" className="btn2">
          HOME
        </Link>
      </div>
    </div>
  );
};

export default About;
