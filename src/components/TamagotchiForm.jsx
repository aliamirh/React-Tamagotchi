import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

export default function TamagotchiForm (props){
    let _name = null;

    function handleNewTamagotchiFormSubmission(event){
        event.preventDefault();
        console.log('test',props)
        props.onNewTamagotchiCreation({name: _name.value, hunger: 20, fatigue: 20, entertainmentLevel: 20, timeOpen: new Moment(), id: v4()});
        _name.value = '';
    }
    
    return(
        <div>
            <form onSubmit={handleNewTamagotchiFormSubmission}>
                <input id='name' placeholder='name'
                ref={(input) => {_name = input;}}/>
                <button type='submit'>Create!</button>
            </form>
        </div>
    )
}

TamagotchiForm.propTypes = {
    onNewTamagotchiCreation: PropTypes.func
}