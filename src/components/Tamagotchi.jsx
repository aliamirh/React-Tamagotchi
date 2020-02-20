import React from "react";
import PropTypes from "prop-types";

// Components

export default function Tamagotchi(props) {
  const feed = () => {
    props.feedTamagotchi();
  };

  const entertain = () => {
    props.entertainTamagotchi();
  };

  const rest = () => {
    props.restTamagotchi();
  };

  const statusBarStyle = {
    color: 'white'
}

const hungerStyle = {
    backgroundColor: 'green',
    marginBottom: '12px',
    width: '60%',
    padding: '4px'
}
const fatigueStyle = {
    backgroundColor: 'green',
    marginBottom: '12px',
    width: '60%',
    padding: '4px'
}
const entertainmentStyle = {
    backgroundColor: 'green',
    marginBottom: '12px',
    width: '60%',
    padding: '4px'
}

  return (
    <div>
      <div>
      <h3>{props.name}</h3>
      <h4>Born {props.formattedAge} ago</h4>
      <h4>Hunger: {props.formattedHunger}</h4>
      <h4>Fatigue: {props.formattedFatigue}</h4>
      <h4>Entertainment: {props.formattedEntertainment}</h4>
      <button onClick={feed}>Feed</button>
      <button onClick={entertain}>Play with</button>
      <button onClick={rest}>Put to Sleep</button>
    </div>
      <div style={statusBarStyle}>
            <div style={hungerStyle}>{props.formattedHunger}</div>
            <div style={fatigueStyle}>{props.formattedFatigue}</div>
            <div style={entertainmentStyle}>{props.formattedEntertainment}</div>
        </div>
    </div>
    
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  formattedAge: PropTypes.string.isRequired,
  formattedHunger: PropTypes.number.isRequired,
  formattedEntertainment: PropTypes.number.isRequired,
  formattedFatigue: PropTypes.number.isRequired
};
