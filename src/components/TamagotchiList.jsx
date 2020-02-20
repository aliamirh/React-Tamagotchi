import React from "react";
import Tamagotchi from "./Tamagotchi";
import PropTypes from "prop-types";

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
