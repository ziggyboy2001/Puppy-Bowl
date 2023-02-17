import {React, useState, useEffect} from "react";
import { Navbar, Dogs } from "./";


const Main = () => {
const [players, setPlayers] = useState([])
async function getDogs(){
    try {
        const response = await fetch(
          'https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players'
        );
        const result = await response.json();
        const puppies = result.data.players
        console.log(puppies);
        setPlayers(puppies);
      } catch (err) {
        console.error(err);
      }
}
useEffect(() => {
    getDogs()

},[])

    return(
        <div id="main">
            <Navbar />
        <Dogs players={players}/>

        </div>
    )
}

export default Main
//        <Dogs puppies = {puppies}/>