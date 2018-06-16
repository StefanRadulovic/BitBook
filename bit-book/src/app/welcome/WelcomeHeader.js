import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomeHeader = () => {

    return (
        <header>
            <div id="header-wrap">
                <h1 id="app-title"><Link to=''>Bitbook</Link></h1>
            </div>
        </header>
    );
}