import React from 'react';
import { Navigation } from './Navigation';

export const Header = () => {

    return (
        <header>
            <div id="header-wrap">
                <h1>Bitbook</h1>
                <Navigation />
            </div>
        </header>
    );
}