import React, { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(!isOpen);
          console.log('isOpen: ', isOpen);
        }}
        className='topbar__btn topbar__btn--desktop-hidden'
      >
        <img src={isOpen ? require('./../assets/hamburger-close.svg') : require('./../assets/hamburger.svg')} alt='Hamburger icon' />
      </button>
      <div onClick={() => setOpen(false)} className={isOpen ? 'mobile-menu mobile-menu--active' : 'mobile-menu'}>
        <nav className='mobile-menu__nav'>
          <ul className='mobile-menu__list'>
            <li className='mobile-menu__item'>
              <a href='#' className='mobile-menu__link'>
                O Kazusie
              </a>
            </li>
            <li className='mobile-menu__item'>
              <a href='#' className='mobile-menu__link'>
                O firmie
              </a>
            </li>
            <li className='mobile-menu__item'>
              <a href='#' className='mobile-menu__link'>
                Czasopisma
              </a>
            </li>
            <li className='mobile-menu__item'>
              <a href='#' className='mobile-menu__link'>
                Szkolenia
              </a>
            </li>
            <li className='mobile-menu__item'>
              <a href='#' className='mobile-menu__link'>
                Baza wiedzy
              </a>
            </li>
            <li className='mobile-menu__item'>
              <a href='#' className='mobile-menu__link'>
                KazusTV
              </a>
            </li>
            <li className='mobile-menu__item'>
              <a href='#' className='mobile-menu__link'>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
