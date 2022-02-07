import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getCountries } from '../../Actions';
import './LandingPage.css';

const LandingPage = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getCountries());
    }

    return (
        <div className='landingPage'>
            <h1 className='header'>Henry Countries</h1>
            <Link to='/home'>
                <button className='button' onClick={handleClick}>Home</button>
            </Link>
        </div>
    ) 
};

export default LandingPage;
