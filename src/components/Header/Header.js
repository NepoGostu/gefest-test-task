import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = React.memo(props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const burgerRef = useRef()

  return (
    <div className={`header ${isMenuOpen ? 'active' : ''}`}>
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <img src="assets/images/logo.svg" alt="" />
          </Link>
          <div className="header__info">
            <ul className="header__nav">
              <li>
                <Link to="/about">О компании</Link>
              </li>
              <li>
                <Link to="/">Проекты</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
            <a href="tel:+7 (499) 999-99-99" className="header__btn">
              <img src="assets/images/phone.svg" alt="" />
              <span>+7 (499) 999-99-99</span>
            </a>
          </div>
          <div
            className="header__burger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ref={burgerRef}
          >
            <a href="#">
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Header
