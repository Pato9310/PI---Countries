import React from 'react';

const validate = ( input ) => {
    let errors = {};
    if (!input.name) {
        errors.name = "You must complete this field."
    } else if (!input.duration) {
        errors.duration = "You must complete this field."
    }else if (!input.difficulty) {
        errors.difficulty = "You must complete this field."
    }else if (!input.season) {
        errors.season = "You must complete this field."
    }else if (!input.id) {
        errors.id = "You must complete this field."
    }
    return errors;
}

const ActivityCreate = () => {
    return (
        <div>

        </div>
    );
};

export default ActivityCreate;
