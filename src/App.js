import React from 'react';
import './styles/main.scss';

function App() {
  return (
    <>
      <div className='topbar'>
        <div className='topbar__container main-container'>
          <div className='topbar__logo'>
            <img src={require('./assets/topbar_logo.svg')} alt='Kazus Logo' />
          </div>
          <nav className='topbar__nav'>
            <ul className='menu'>
              <li className='menu__item'>
                <a href='#' className='menu__link'>
                  O kazusie
                </a>
              </li>
              <li className='menu__item'>
                <a href='#' className='menu__link'>
                  O firmie
                </a>
              </li>
              <li className='menu__item'>
                <a href='#' className='menu__link'>
                  Czasopisma
                </a>
              </li>
              <li className='menu__item'>
                <a href='#' className='menu__link'>
                  Szkolenia
                </a>
              </li>
              <li className='menu__item'>
                <a href='#' className='menu__link'>
                  Baza wiedzy
                </a>
              </li>
              <li className='menu__item'>
                <a href='#' className='menu__link'>
                  KazusTV
                </a>
              </li>
              <li className='menu__item'>
                <a href='#' className='menu__link'>
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
          <div className='topbar__icons'>
            <div className='topbar__btn'>
              <img src={require('./assets/magnifier.svg')} alt='Search icon' />
            </div>
            <div className='topbar__btn'>
              <img src={require('./assets/user_icon.svg')} alt='User icon' />
            </div>
            <div className='topbar__btn'>
              <img src={require('./assets/bag.svg')} alt='Shopping bag icon' />
              <span className='counter'>2</span>
            </div>
          </div>
        </div>
      </div>
      <main>
        <header className='magazines'>
          <div className='magazines__container main-container'>
            <div className='magazines__text'>
              <h1 className='main-heading'>Czasopisma</h1>
              <p className='paragraph paragraph--bold'>
                Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu Podatkowego”, który tym razem poświęcony jest w dużej części zmianom w podatkach w
                roku 2019.
              </p>
              <p className='paragraph'>
                Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie rozliczania kosztów używania samochodów osobowych, wprowadzenie „exit tax” czy
                zmiany dotyczące poboru podatku u źródła na gruncie podatków dochodowych, poświęcając im odrębne artykuły.
              </p>
            </div>
            <div className='magazines__cover'>
              <img src={require('./assets/cover_large.png')} alt='Large magazine cover' className='cover-large' />
              <img src={require('./assets/cover_small.png')} alt='Small magazine cover' className='cover-small' />
            </div>
          </div>
        </header>
      </main>
    </>
  );
}

export default App;
