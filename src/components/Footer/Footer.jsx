import React from 'react'
import './Footer.css'

const Footer = React.memo(props => {
  const { empty } = props

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          {empty ? null : (
            <div className="footer__items">
              <div className="footer__img">
                <img src="assets/images/footer-img.png" alt="" />
              </div>
              <div className="footer__item">
                <div className="footer__content">
                  <div className="footer__information">
                    <div className="footer__aside">
                      <span>Площадь</span>
                      <p>1/1</p>
                    </div>
                    <div className="footer__aside">
                      <span>Этаж</span>
                      <p>73.01 м2</p>
                    </div>
                    <div className="footer__aside">
                      <span>Ставка м2/год</span>
                      <p>56 099 ₽</p>
                    </div>
                  </div>
                  <div className="footer__aside footer__aside--wide">
                    <span>Стоимость</span>
                    <p>
                      120 000 ₽/мес <img src="assets/images/price.svg" alt="" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={`footer__info ${empty ? 'wide' : ''} `}>
            <div className="footer__name">Филлипов Христафор Константинович</div>
            <a href="tel:+7 (499) 999-99-99" className="footer__btn">
              <img src="assets/images/phone.svg" alt="" />
              <span>+7 (499) 999-99-99</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Footer
