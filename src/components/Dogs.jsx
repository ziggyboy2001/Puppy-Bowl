import React from "react";
import { About } from "./About";
import { Link } from "react-router-dom";

function Dogs(props) {
  console.log(props);
  return props.players.map((puppy) => {
    return (
      <div className="eachCard" key={puppy.id}>
        <div className="cards">
          <span className="name">{puppy.name}</span>
          <span className="idNumber">{puppy.id}</span>

          <span>
            <img className="image" src={puppy.imageUrl} />
          </span>
          <Link to={`${puppy.id}`} className="btn">
            About {puppy.name}
          </Link>
        </div>
      </div>
    );
  });
}

export default Dogs;
