import React from 'react'
import ShortlyLogo from '../../../img/logo.svg'
import PropTypes from 'prop-types';
import { useState } from 'react'

import './navigation.css'

const Navigation = ({navItems}) => {
    const [isNavActive, setIsNavActive] = useState(false)
    const toggleNav = () => {
        setIsNavActive(!isNavActive)
    }
    return (
        <nav className="nav">
            <img src={ShortlyLogo} alt="Shortly Logo" className="nav__logo" />
            <div className={!isNavActive ? 'nav__list-container active' : 'nav__list-container'}>
                <ul className="nav__list">
                    {navItems.map((navItem, index) => (
                        <li className="nav__item" key={index}>{
                            //eslint-disable-next-line
                        }   <a href="#" className="nav__link">{navItem}</a>
                        </li>
                    ))}
                </ul>
                <div className="nav__list-seperator"></div>
                <ul className="nav__list--primary">
                    <li className="nav__item nav__item--primary">{
                            //eslint-disable-next-line
                        }   <a href="#" className="nav__link">Login</a>
                    </li>
                    <li className="nav__item nav__item--primary">{
                            //eslint-disable-next-line
                        }<a href="#" className="nav__link nav__link--btn">Sign Up</a>
                    </li>
                </ul>
            </div>
            <div onClick={toggleNav} className={isNavActive ? 'nav__hamburger active' : 'nav__hamburger'}>
                <span></span>
            </div>
        </nav>
    )
}


// Features
// Pricing
// Resources

// Login
// Sign Up
Navigation.defaultProps = {
    navItems: ['Features', 'Pricing', 'Resources']
}

Navigation.propTypes = {
    navItems: PropTypes.array.isRequired,
}
export default Navigation
