import React, { Component } from 'react';
import Aux from '../hoc/Aux/Aux';
import classes from './Layout.module.css';
import Logo from '../Logo/Logo'

class Layout extends Component {
    state = {
        hideLogo: false
    };

    hideLogoHandler = () => {
        console.log('clicked');
        this.setState({hideLogo: true});
    }

render () {
    const displayProp = this.state.hideLogo ? 'none' : 'block'
    const bootstrapClasses = 'position-absolute h-10';

    let logoStyle = {
        top: '35%',
        left: '45%',
        cursor: 'pointer',
        display: displayProp
    }

    return (
            <Aux>
                <main className={classes.Layout}>
                    <Logo
                        bootstrap={bootstrapClasses}
                        style={logoStyle}
                        logoClicked={this.hideLogoHandler}
                    />
                </main>
            </Aux>
        )
    }
};

export default Layout;