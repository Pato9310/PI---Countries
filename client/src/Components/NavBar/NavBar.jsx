import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
    return (
        <div>
            <SearchBar/>
            <Link to='/home'/> Home
            <Link to='/create-activity'/> Create Activity
            <Link to='/activities'/> List of Activities
        </div>
    );
};

export default NavBar;
