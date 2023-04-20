import '../assets/css/header.css';
import Logo from '../assets/image/logo.svg';
import Burger from '../assets/image/burger.svg';
import { useState, useEffect } from 'react';

function Header() {

  const [showItems, setShowItems] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleBurger = () => {
    setShowItems(!showItems);
  }

  const handleItems = () => {
    setShowItems(false);
  }

  useEffect(() => {

    const changeWidth = () => {
      setWidth(window.innerWidth);

      if(window.innerWidth > 1024){
        setShowItems(false);
      }
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  })

    return (
      <header>
        <div className="header">
          <nav>
            <img onClick={handleItems} src={Logo} alt="" />

            {(showItems || width > 1024) && (
              <ul className="menu">
                <li onClick={handleItems} className="items">CHAPITRES</li>
                <li onClick={handleItems} className="items">SAISONS</li>
                <li onClick={handleItems} className="items">CLASSEMENT</li>
                <li onClick={handleItems} className="items">JOUEURS</li>
                <li onClick={handleItems} className="items">À PROPOS</li>
              </ul>
            )}

            <img onClick={handleBurger} src={Burger} alt="" />
          </nav>
        </div>
      </header>
    );
  }

export default Header;