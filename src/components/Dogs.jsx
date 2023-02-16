import React, {useEffect, useState} from 'react';

function Dogs(props) {
const [players, setPlayers] = useState([])

useEffect(() => {
    async function getDogs(){
        try {
            const response = await fetch(
              'https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players'
            );
            const result = await response.json();
            console.log(result.data.players);
            
          } catch (err) {
            console.error(err);
          }
    }
    getDogs()
},[])
console.log(players)
    return (
        <div>
            I am the dog component
            <table>

<td>ID: </td>
<td>Name: </td>
<td>Breed: </td>
<td>Status:</td>
<td>*Image*</td>
<button>More Info</button>
</table>
        </div>
    );
}

export default Dogs;