import React from 'react';
import { useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar';
import Loading from '../Loading'

const Home = () => {    
    const isLoading = useSelector( state => state.loading );

    return (
        <div>
            {
                isLoading ? <Loading/> :
                <div>
                    <NavBar/>
                </div>
            }
        </div>
    )
};

export default Home;    
