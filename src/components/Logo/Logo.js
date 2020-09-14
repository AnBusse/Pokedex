import React from 'react';
import pokeBall from '../../assets/images/pokeball.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div
        className={[classes.Logo, props.bootstrap].join(' ')}
        style={props.style}
        onClick={props.logoClicked}
    >
        <img src={pokeBall} className="h-100" alt="Pokeball"/>
    </div>
);

export default logo;