import React from 'react';
import PropTypes from 'prop-types';

export default function StatusBar(props){
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
    console.log(this);
    
    return(        
        <div style={statusBarStyle}>
            <div style={hungerStyle}>{props.formattedHunger}</div>
            <div style={fatigueStyle}>Fatigue</div>
            <div style={entertainmentStyle}>Entertainment</div>
        </div>
    );
}

StatusBar.propTypes = {
    formattedHunger: PropTypes.string
}