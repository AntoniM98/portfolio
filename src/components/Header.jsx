import { useState } from 'react';
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function toggleHamburgerNav() {
    setHamburgerActive(!hamburgerActive);
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={Logo} />
          </Link>
        </div>

        <div className="link-container">
          <HashLink to="/#projects" className="navigation-link">PROJECTEN</HashLink>
          <HashLink to="/#about" className="navigation-link">OVER MIJ</HashLink>
          <HashLink to="/#contact" className="navigation-link">CONTACT</HashLink>
        </div>
        
        <div 
          className={`hamburger-icon ${hamburgerActive ? 'active' : ''}`} 
          onClick={toggleHamburgerNav}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`hamburger-nav ${hamburgerActive ? 'active' : ''}`}>
          <HashLink to="/#projects" className="navigation-link" onClick={toggleHamburgerNav}>PROJECTEN</HashLink>
          <HashLink to="/#about" className="navigation-link" onClick={toggleHamburgerNav}>OVER MIJ</HashLink>
          <HashLink to="/#contact" className="navigation-link" onClick={toggleHamburgerNav}>CONTACT</HashLink>
        </div>
      </nav>
    </header>
  );
}