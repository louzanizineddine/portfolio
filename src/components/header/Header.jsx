import React from 'react';
import './header.css'
import CTA from "./CTA";
import Me from "../../assets/me.png"
import HeaderSocial from "./HeaderSocial";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>LOUZANI Zineddine</h1>
                <h5 className="text-light">Full Snack Eater</h5>
                <CTA />
                <HeaderSocial />
                <div className='me'>

                    <img src={Me} alt="me"/>
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;
