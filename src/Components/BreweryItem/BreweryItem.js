import React from 'react'
// import {Link }
import './BreweryItem.css'

const BreweryItem = (name) => {

    const brewname = name.data.name;
    var address = name.data.address_1;
    if(address === null) {
        address = "No address found";
    }
    const phone = name.data.phone;
    const website_url = name.data.website_url;
    var website = "Website"
    if(website_url === null) {
        website = "Website not found"
    }
    const state = name.data.state;
    const city = name.data.city;    

    return (
        <div className='data' key={name.data.id}>

            <div className="name">
                <h2>{brewname}</h2>
            </div>
            <div className="address">
                <p>Address : {address}</p>
                <p>Phone: {phone}</p>
                <p>City : {city}</p>
                <p>State : {state}</p>
            </div>
            <div className="website">
                <a href={`${website_url}`} rel='noreferrer' target='_blank'>{website}</a>
            </div>
        </div>
    )
}

export default BreweryItem