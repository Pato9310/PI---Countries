import React from 'react';
import { useForm } from './useForm';
import NavBar from '../NavBar/NavBar';
import { useSelector } from 'react-redux';
import { FALL, SPRING, SUMMER, WINTER } from '../../Const/Const';

const initialForm = {
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    id: "",
}

const validationsForm = ( form ) => {
    let errors = {};
    if (!form.name) {
        errors.name = "You must complete the 'Name' field."
    } else if (!form.duration) {
        errors.duration = "You must complete the 'Duration' field."
    }else if (!form.difficulty) {
        errors.difficulty = "You must complete the 'Difficulty' field."
    }else if (!form.season) {
        errors.season = "You must complete the 'Season' field."
    }else if (!form.id) {
        errors.id = "You must complete the 'Id' field."
    }
    return errors;
}

const ActivityCreate = () => {
    const countries = useSelector( state => state.countries);
    const {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleDelete,
        handleSelect
    } = useForm(initialForm, validationsForm)

    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div className="activityCardContainer">
                <div className="activityCard">
                    {/* <div className="activityTitle">
                    </div>   */}

                    <form className="formActivity" onSubmit={handleSubmit}>
                        <span className='titleCreateActivity'> Create an Activity </span>
                        <div className="inputActivities">
                            <label className='labelActivity'>Name: </label>
                            <input
                                className="i"
                                type="text"
                                placeholder="Activity name..."
                                value={form.name}
                                name="name"
                                onChange={handleChange}
                            />
                            {errors.name && <p className="e">{errors.name}</p>}
                        </div>
                        <div className="inputActivities">
                            <label>Duration: </label>
                            <input
                                className="i"
                                type="text"
                                value={form.duration}
                                name="duration"
                                placeholder="Set duration..."
                                onChange={handleChange}
                            />
                            {errors.duration && <p className="e">{errors.duration}</p>}
                        </div>
                        <div className="inputActivities">
                            <label>Difficulty: </label>
                            <input
                                className="i"
                                type="range"
                                name="difficulty"
                                min="1"
                                max="5"
                                value={form.difficulty}
                                onChange={(event) => handleChange(event)}
                            />
                            {errors.difficulty && <p className="e"> {errors.difficulty}</p>}
                        </div>
                        <div className="seasonInput">
                            <select
                                className="i"
                                name="season"
                                value={form.season}
                                onChange={(event) => handleChange(event)}
                            >
                                <option className='op' >Season: </option>
                                <option className='op' value={WINTER}>Winter</option>
                                <option className='op' value={SUMMER}>Summer</option>
                                <option className='op' value={FALL}>Fall</option>
                                <option className='op' value={SPRING}>Spring</option>
                            </select>
                            {errors.season && <p className="e">{errors.season}</p>}
                        </div>
                        {errors.id && <p className="e">{errors.id}</p>}

                        <div>
                            <select  className="i" onChange={(event) => handleSelect(event)}>
                                <option className='op' >Countries </option>
                                {
                                    countries.map((v) => (
                                        <option className='op' value={v.id}>{v.name}</option>))
                                }
                            </select>
                        </div>

                        <div className="textArea">
                            {
                                form.id.map((country) => (
                                    <div className='countrieAndButton'>
                                        <input className='btnDelete' type='button' value='X' onClick={() => handleDelete(country)}/>
                                        <p className='pOfCountry'>{country}</p>
                                    </div>))
                            }
                        </div>
                        <div>
                            <button className='btnActivity' type="submit">Create Activity</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ActivityCreate;
