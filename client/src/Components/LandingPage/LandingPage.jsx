import React from 'react';
import { Link } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <h1 className='header'>Henry Countries</h1>
            <Link to='/home'>
                <button className='button'>Home</button>
            </Link>
        </div>
    ) 
};

export default LandingPage;
