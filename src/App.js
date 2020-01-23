import React from 'react';
import './styles/main.scss';
import { MobileMenu, Cart } from './components';

const App = () => {
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
                  O Kazusie
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
            <button className='topbar__btn'>
              <img src={require('./assets/magnifier.svg')} alt='Search icon' />
            </button>
            <button className='topbar__btn'>
              <img src={require('./assets/user_icon.svg')} alt='User icon' />
            </button>
            <Cart />
            <MobileMenu />
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
        <section className='find-magazine main-container'>
          <h2 className='heading-h2'>Wyszukaj czasopismo</h2>
          <div className='grid'>
            <div className='item'>
              <div className='item__image'>
                <img src={require('./assets/item_image.png')} alt='Kazus cover' />
              </div>
              <div className='item__content'>
                <h3 className='item__title'>Kazus Podatkowy1(6)2019</h3>
                <p className='item__price'>
                  98,76<span>PLN</span>
                </p>
                <p className='item__tax'>+ VAT 23%</p>
                <a href='#' className='item__details'>
                  Szczegóły
                </a>
              </div>
            </div>
            <div className='item'>
              <div className='item__image'>
                <img src={require('./assets/item_image.png')} alt='Kazus cover' />
              </div>
              <div className='item__content'>
                <h3 className='item__title'>Kazus Podatkowy1(6)2019</h3>
                <p className='item__price'>
                  98,76<span>PLN</span>
                </p>
                <p className='item__tax'>+ VAT 23%</p>
                <a href='#' className='item__details'>
                  Szczegóły
                </a>
              </div>
            </div>
            <div className='item'>
              <div className='item__image'>
                <img src={require('./assets/procedury.png')} alt='Procedury administracyjne i podatkowe cover' />
              </div>
              <div className='item__content'>
                <h3 className='item__title'>Procedury administracyjne i podatkowe 2</h3>
                <p className='item__price'>
                  98,76<span>PLN</span>
                </p>
                <p className='item__tax'>+ VAT 23%</p>
                <a href='#' className='item__details'>
                  Szczegóły
                </a>
              </div>
            </div>
            <div className='item'>
              <div className='item__image'>
                <img src={require('./assets/prawo_pomocy_publicznej.png')} alt='Prawo pomocy publicznej cover' />
              </div>
              <div className='item__content'>
                <h3 className='item__title'>Prawo pomocy publicznej</h3>
                <p className='item__price'>
                  98,76<span>PLN</span>
                </p>
                <p className='item__tax'>+ VAT 23%</p>
                <a href='#' className='item__details'>
                  Szczegóły
                </a>
              </div>
            </div>
            <div className='item'>
              <div className='item__image'>
                <img src={require('./assets/item_image.png')} alt='Kazus cover' />
              </div>
              <div className='item__content'>
                <h3 className='item__title'>Kazus Podatkowy1(6)2019</h3>
                <p className='item__price'>
                  98,76<span>PLN</span>
                </p>
                <p className='item__tax'>+ VAT 23%</p>
                <a href='#' className='item__details'>
                  Szczegóły
                </a>
              </div>
            </div>
            <div className='item'>
              <div className='item__image'>
                <img src={require('./assets/prawo_pomocy_publicznej.png')} alt='Prawo pomocy publicznej cover' />
              </div>
              <div className='item__content'>
                <h3 className='item__title'>Prawo pomocy publicznej</h3>
                <p className='item__price'>
                  98,76<span>PLN</span>
                </p>
                <p className='item__tax'>+ VAT 23%</p>
                <a href='#' className='item__details'>
                  Szczegóły
                </a>
              </div>
            </div>
            <div className='item'>
              <div className='item__image'>
                <img src={require('./assets/procedury.png')} alt='Procedury administracyjne i podatkowe cover' />
              </div>
              <div className='item__content'>
                <h3 className='item__title'>Procedury administracyjne i podatkowe 2</h3>
                <p className='item__price'>
                  98,76<span>PLN</span>
                </p>
                <p className='item__tax'>+ VAT 23%</p>
                <a href='#' className='item__details'>
                  Szczegóły
                </a>
              </div>
            </div>
            <div className='item'>
              <div className='item__image'>
                <img src={require('./assets/prawo_pomocy_publicznej.png')} alt='Prawo pomocy publicznej cover' />
              </div>
              <div className='item__content'>
                <h3 className='item__title'>Prawo pomocy publicznej</h3>
                <p className='item__price'>
                  98,76<span>PLN</span>
                </p>
                <p className='item__tax'>+ VAT 23%</p>
                <a href='#' className='item__details'>
                  Szczegóły
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className='pagination'>
          <div className='pagination__container'>
            <a href='#' className='pagination__box'>
              <img src={require('./assets/arrow.svg')} alt='Arrow left' />
            </a>
            <a href='' className='pagination__box'>
              1
            </a>
            <a href='' className='pagination__box'>
              2
            </a>
            <a href='' className='pagination__box pagination__box--active'>
              3
            </a>
            <a href='' className='pagination__box'>
              4
            </a>
            <a href='' className='pagination__box'>
              5
            </a>
            <a href='' className='pagination__box'>
              6
            </a>
            <a href='#' className='pagination__box'>
              <img src={require('./assets/arrow.svg')} alt='Arrow right' />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
