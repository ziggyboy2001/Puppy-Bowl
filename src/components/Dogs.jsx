import React from 'react';
import { About } from './About'
import { Link } from 'react-router-dom';

function Dogs(props) {

console.log(props)
    return (

        props.players.map(puppy =>{
            return <div className="eachCard" key={puppy.id}>
                <div className="cards">
                <p className='name'>{puppy.name}</p>
                <p className='idNumber'>{puppy.id}</p>

                <p><img className="image" src={puppy.imageUrl} /></p>
                <Link to='/about' className='btn'>About {puppy.name}</Link>
                </div>
            </div>
        })
    



    );
}

export default Dogs;