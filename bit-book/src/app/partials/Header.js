import React from 'react';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <header>
            <div id="header-wrap">
                <h1 id="app-title"><Link to='/posts'>Bitbook</Link></h1>
                <Navigation />
            </div>
        </header>
    );
}