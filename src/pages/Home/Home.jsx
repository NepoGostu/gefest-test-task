import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Controller, Navigation, Pagination, Thumbs} from 'swiper'
import 'swiper/swiper-bundle.css'
import './Home.css'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs])

const Home = React.memo(props => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const slides = []
  for (let i = 0; i < 9; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img src={`assets/images/gallery-${i + 1}.png`} />
      </SwiperSlide>,
    )
  }

  const thumbs = []
  for (let i = 0; i < 9; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`}>
        <img src={`assets/images/gallery-${i + 1}.png`}></img>
      </SwiperSlide>,
    )
  }

  return (
    <Layout>
      <div className="home">
        <div className="container">
          <div className="home__inner">
            <Link to="/" className="home__back">
              <img src="assets/images/arrow.svg" alt="" />
              <span>Вернуться назад</span>
            </Link>
            <h2 className="home__title">квартира 1</h2>
            <div className="home__address">
              <span>Адрес:</span>
              <p>ЮВАО, ул. Барыкина, д.5к2 тут будет вторая и третья строка адреса объекта</p>
            </div>
            <div className="home__swiper">
              <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={0}
                slidesPerView={1}
                className="home__gallery"
              >
                {slides}
              </Swiper>

              <Swiper
                spaceBetween={16}
                slidesPerView={4}
                onSwiper={setThumbsSwiper}
                className="home__thumbs"
                navigation
                breakpoints={{
                  768: {
                    slidesPerView: 7,
                    spaceBetween: 35,
                  },
                }}
              >
                {thumbs}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
})

export default Home
