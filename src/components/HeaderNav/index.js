import './style.scss';
import { Link } from 'react-router-dom';
import logo from '../images/logo_dark.png';
import { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function HeaderNav() {

    const [showLinks, setShowLinks] = useState(false)

    const { isDarkMode, toggleTheme } = useTheme();

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }


    return (
        <header role="banner" className='header' id='accueil'>
            <nav role="navigation" aria-label="Menu principal" className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
                <div className='navbar__logo'>
                    <Link to="/" className='logo'>
                        <img className='logo__img' src={logo} alt="" />
                        <p className='logo__item'>Dokkoh Développement</p>
                    </Link>
                </div>
                <ul className='navbar__links'>
                    <li className='navbar__item slideInDown-1'>
                        <Link to="/" className='navbar__link' onClick={handleShowLinks}>Accueil</Link>
                    </li>
                    <li className='navbar__item slideInDown-2'>
                        <Link to="/about" className='navbar__link' onClick={handleShowLinks}>Présentation</Link>
                    </li>
                    <li className='navbar__item slideInDown-3'>
                        <Link to="/skills" className='navbar__link' onClick={handleShowLinks}>Compétences</Link>
                    </li>
                    <li className='navbar__item slideInDown-4'>
                        <Link to="/projects" className='navbar__link' onClick={handleShowLinks}>Réalisations</Link>
                    </li>
                    <li className='navbar__item slideInDown-5'>
                        <Link to="/contact" className='navbar__link' onClick={handleShowLinks}>Contact</Link>
                    </li>
                </ul>
                <button className='navbar__burger' type='button' aria-label='Menu' onClick={handleShowLinks}>
                    <span className='burger__bar'></span>
                </button>
                <button className='changeThemeButton' onClick={toggleTheme}>
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
        </header>
    );
}

export default HeaderNav;