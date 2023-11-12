import React, { useState } from 'react'
import BreweryItem from '../BreweryItem/BreweryItem';
import './LandingPage.css'

const LandingPage = () => {

    const [brewname, setbrewname] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    // const [movies, setMovies] = useState([]);

    let API_URL = 'https://api.openbrewerydb.org/v1/breweries';
    // let type = 'micro'

    const searchMovies = async (title) => {

        if (title.length !== 0) {
            const response = await fetch(`${API_URL}?by_city=${title}`);
            const data = await response.json();
            if (data.length === 0) {
                alert('No results found, enter new city');
            }
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

    };

    // console.log(brewname);

    return (
        <div className='main'>
            <div className="check">
                <h1>🍻Brewery Search🍻</h1>
            </div>
            <div className="search">
                {/* Enter City name: */}
                {/* <div className="options">            
                    <select name="option" className="names">
                        <option value="select-option">Select Options</option>
                        <option value="city">By City</option>
                        <option value="name">By Name</option>
                        <option value="type">By type</option>
                    </select>
                </div> */}
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