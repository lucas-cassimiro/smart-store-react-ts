import { SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'

import { SwiperContainer } from './styles'

import IPhone from '../../assets/banner-main-iphone.png'
import AirPods from '../../assets/banner-main-airpods.png'
import AppleWatch from '../../assets/banner-main-apple-watch.png'
import Samsung from '../../assets/banner-main-samsung.png'

export default function Carousel() {
  return (
    <SwiperContainer
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      speed={1700}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={IPhone} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Samsung} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={AirPods} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={AppleWatch} />
      </SwiperSlide>
    </SwiperContainer>
  )
}
