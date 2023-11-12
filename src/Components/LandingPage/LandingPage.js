import React, { useEffect, useState } from 'react'
import BreweryItem from '../BreweryItem/BreweryItem';
import './LandingPage.css'

const LandingPage = () => {

    const [brewname, setbrewname] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    // const [movies, setMovies] = useState([]);

    let API_URL = 'https://api.openbrewerydb.org/v1/breweries';
    // let type = 'micro'

    const searchMovies = async (title) => {
        
        var data;
        if (title.length !== 0) {
            const response = await fetch(`${API_URL}?by_city=${title}`);
            data = await response.json();

            setbrewname(data);
        }
        else {
            alert('enter the city');
            setbrewname([]);
        }
        // console.log(data);
        // data.forEach(Element => {
        //     console.log(Element);
        // });
        // setData(data);
        if(data.length === 0) {
            alert('No results found, enter new city');
        }
    };

    // console.log(brewname);

    return (
        <div className='main'>
            <div className="check">
                <h1>🍻Brewery Search🍻</h1>
            </div>
            <div className="search">
                {/* Enter City name: */}
                <div className="input">
                    <input
                        type='text'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by city"
                        required
                    />
                </div>
                <div className="submit">
                    <button onClick={() => searchMovies(searchTerm)}>search</button>
                </div>                
            </div>

            <br />
            {/* <Link to="/"></Link> */}
            <div className="container">
                {
                brewname.map((name) => (
                    <BreweryItem data={name} />
                ))}
            </div>



        </div>

    )
}

export default LandingPage