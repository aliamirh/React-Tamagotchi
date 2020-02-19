import React from 'react';
import PropTypes from 'prop-types';


export default function Tamagotchi(props){
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{props.formattedAge} old</h4>
            <h4>Hunger: {props.hunger}</h4>
            <h4>Fatigue: {props.fatigue}</h4>
            <h4>Entertainment: {props.entertainmentLevel}</h4>
        </div>
    )
}

Tamagotchi.propTypes = {
    name: PropTypes.string.isRequired,
    formattedAge: PropTypes.string.isRequired
};