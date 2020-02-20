import React from "react";
import PropTypes from "prop-types";

import Tamagotchi from "./Tamagotchi";
import StatusBar from "./StatusBar"

export default function TamagotchiList(props) {
  return (
    <div>
      {props.tamagotchiList.map(tamagotchi => (
        <Tamagotchi
          {...tamagotchi}
          feedTamagotchi={props.updateHunger}
          entertainTamagotchi={props.updateEntertainment}
          restTamagotchi={props.updateFatigue}
          key={tamagotchi.id} 
        />
      ))}
    </div>
  );
}

TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array
};
