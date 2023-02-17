import React from 'react';

function Dogs(props) {

console.log(props)
    return (

    props.players.map(puppy =>{
        return <tr key={puppy.id}>
            <td>{puppy.name}</td>
            <td>{puppy.breed}</td>
            <td>{puppy.status}</td>
        </tr>
    })



    );
}

export default Dogs;