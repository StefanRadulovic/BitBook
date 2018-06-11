import React from 'react';

export const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer>
            <div id="footer-wrap"><p id="copyright">Copyright &copy; Team Dunja Stefanija Stefan {year}</p></div>
        </footer>
    );
}