import React from 'react';
import PropTypes from 'prop-types';


export default function Tamagotchi(props){
    const feed = () => {
        props.feedTamagotchi();
    }

    const entertain = () => {
        props.entertainTamagotchi();
    }

    const rest = () => {
        props.restTamagotchi();
    }

    return (
        <div>
            <h3>{props.name}</h3>
            <h4>Born: {props.formattedAge} ago</h4>
            <h4>Hunger: {props.formattedHunger}</h4>
            <h4>Fatigue: {props.formattedFatigue}</h4>
            <h4>Entertainment: {props.formattedEntertainment}</h4>
            <button onClick={feed}>Feed</button>
            <button onClick={entertain}>Play with</button>
            <button onClick={rest}>Put to Sleep</button>
        </div>
    )
}

Tamagotchi.propTypes = {
    name: PropTypes.string.isRequired,
    formattedAge: PropTypes.string,
    formattedHunger: PropTypes.number,
    formattedEntertainment: PropTypes.number,
    formattedFatigue: PropTypes.number
};