import React, { useState } from 'react';

const Cart = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
        className='topbar__btn'
      >
        <img src={require('./../assets/cart.svg')} alt='Shopping cart icon' />
        <span className='counter'>2</span>
      </button>

      {isOpen && (
        <div className='cart'>
          <style>{`main:before {display: block}`}</style>
          <p className='cart__title'>Twój koszyk</p>
          <div onClick={() => setOpen(false)} className='cart__close'>
            <img src={require('../assets/cancel.svg')} alt='Cancel button' />
          </div>
          <ul className='cart__list'>
            <li className='cart-item'>
              <div className='cart-item__top'>
                <div className='cart-item__icon'>
                  <img src={require('../assets/book.svg')} alt='' />
                </div>
                <p className='cart-item__name'>Kazus Podatkowy 1(6)2019</p>
                <img src={require('../assets/rubbish-bin.svg')} alt='Rubbish bin' className='cart-item__trash' />
              </div>
              <div className='cart-item__bottom'>
                <p className='cart-item__price-text'>Cena</p>
                <p className='cart-item__price'>
                  98,<span>00 PLN</span>
                </p>
              </div>
            </li>
            <li className='cart-item'>
              <div className='cart-item__top'>
                <div className='cart-item__icon'>
                  <img src={require('../assets/location-pin.svg')} alt='' />
                </div>
                <p className='cart-item__name'>Praktyczne problemy związane z realizacją podatku rolnego...</p>
                <img src={require('../assets/rubbish-bin.svg')} alt='Rubbish bin' className='cart-item__trash' />
              </div>
              <div className='cart-item__bottom'>
                <p className='cart-item__price-text'>Cena</p>
                <p className='cart-item__price'>
                  98,<span>00 PLN</span>
                </p>
              </div>
            </li>
            <li className='cart-item'>
              <div className='cart-item__top'>
                <div className='cart-item__icon'>
                  <img src={require('../assets/book.svg')} alt='' />
                </div>
                <p className='cart-item__name'>Praktyczne problemy związane z realizacją podatku rolnego...</p>
                <img src={require('../assets/rubbish-bin.svg')} alt='Rubbish bin' className='cart-item__trash' />
              </div>
              <div className='cart-item__bottom'>
                <p className='cart-item__price-text'>Cena</p>
                <p className='cart-item__price'>
                  98,<span>00 PLN</span>
                </p>
              </div>
            </li>
          </ul>
          <div className='summary'>
            <div className='summary__total'>
              <div className='summary__total-text'>Łączna kwota</div>
              <div className='summary__total-box'>
                <p className='summary__price'>
                  979,<span>00 PLN</span>
                </p>
                <p className='summary__tax'>+VAT 23%</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className='summary__btn'>
              Przejdź do koszyka
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
