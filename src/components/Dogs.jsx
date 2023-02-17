import React from 'react';

function Dogs(props) {

console.log(props)
    return (

    props.players.map(puppy =>{
        return <tr key={puppy.id}>
            <div className="cards">
            <td>{puppy.name}</td>
            <td>{puppy.id}</td>
            <td>{puppy.breed}</td>
            <td>{puppy.status}</td>
            <td><img className="image" src={puppy.imageUrl} /></td>
            <button>About {puppy.name}</button>
            </div>
        </tr>
    })



    );
}

export default Dogs;