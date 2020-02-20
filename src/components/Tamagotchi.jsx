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
    color: "white"
  };

  const outerStatusBar = {
    backgroundColor: "white",
    border: "1px solid black",
    width: "20.5em",
    marginBottom: "12px"
  };

  const hungerStyle = {
    backgroundColor: "green",
    width: `${props.formattedHunger}` + "em",
    padding: "4px"
  };
  const fatigueStyle = {
    backgroundColor: "green",
    width: `${props.formattedFatigue}` + "em",
    padding: "4px"
  };
  const entertainmentStyle = {
    backgroundColor: "green",
    width: `${props.formattedEntertainment}` + "em",
    padding: "4px"
  };

  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <div style={statusBarStyle}>
          <div style={outerStatusBar}>
            <div style={hungerStyle} id="hungerBar">
              Hunger: {props.formattedHunger}
            </div>
          </div>
          <div style={outerStatusBar}>
            <div style={fatigueStyle}>Fatigue: {props.formattedFatigue}</div>
          </div>
          <div style={outerStatusBar}>
            <div style={entertainmentStyle}>
              Entertainment: {props.formattedEntertainment}
            </div>
          </div>
        </div>
        <button onClick={feed}>Feed</button>
        <button onClick={entertain}>Play with</button>
        <button onClick={rest}>Put to Sleep</button>
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
