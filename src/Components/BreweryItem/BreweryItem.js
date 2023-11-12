import React from 'react'
import './BreweryItem.css'

const BreweryItem = (name) => {

    const name_hotel = name.data.name;
    // console.log(name.data.id, name_hotel);

    return (
        <div className='name' key={name.data.id}>
            <h1>{name_hotel} , {name.data.city}</h1>
        </div>
    )
}

export default BreweryItem