import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountry } from '../../Actions';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInput(()=> event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getCountry(input));
        setInput(()=>'');
    }
    return (
        <div>
            <form onSubmit={ event => handleSubmit(event)}>
                <input 
                    type="text"
                    id="title"
                    autoComplete='off'
                    value={input}
                    placeholder= "Country..."
                    onChange={event=>handleChange(event)}
                />
                <input type="submit" value=""/>
            </form>
        </div>
  );
};

export default SearchBar;
