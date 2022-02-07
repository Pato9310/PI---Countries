import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from '../../Actions';
import NavBar from '../NavBar/NavBar';
import Loading from '../Loading'

const Home = () => {    
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector( state => state.loading );
    const countries = useSelector( state => state.countries );

    const handleChange = (event) => {
        setInput(()=> event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInput(()=>'');
        dispatch(getCountry(input));
    }
    
    return (
        <div>
            {
                isLoading ? <Loading/> :
                <div>
                    <NavBar/>
                    <form onSubmit={event=>handleSubmit(event)}>
                        <label htmlFor="title"></label>
                        <input type="text"
                        id="title"
                        autoComplete='off'
                        value={input}
                        onChange={event=>handleChange(event)}/>
                    </form>
                </div>
            }
        </div>
    )
};

export default Home;    
