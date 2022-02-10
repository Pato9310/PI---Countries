import React from 'react';

const Country = ({name, flag, capital, continent, population}) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={flag} alt="Not found"/>
            <div>
                <h5>Capital: {capital}</h5>
                <h5>Continent: {continent}</h5>
                <h5>Population: {population}</h5>
            </div>
        </div>
    );
};

export default Country;
