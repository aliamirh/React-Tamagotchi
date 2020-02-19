import React from 'react';
import Tamagotchi from './Tamagotchi'
import PropTypes from 'prop-types';

export default function TamagotchiList(props){
    return(
        <div>
            {props.tamagotchiList.map((tamagotchi) =>
            <Tamagotchi 
            name={tamagotchi.name}
            hunger={tamagotchi.hunger}
            fatigue={tamagotchi.fatigue}
            entertainmentLevel={tamagotchi.entertainmentLevel}
            formattedAge={tamagotchi.formattedAge}
            key= {tamagotchi.id}
            />
                )}
        </div>
    );
}

TamagotchiList.propTypes = {
    tamagotchiList: PropTypes.array
}
