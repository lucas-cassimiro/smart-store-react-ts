import CardProducts from '../../components/CProducts'
import Slider, { SliderSettings } from '../Slider'
import { Navigation, A11y } from 'swiper'
import { SwiperSlide } from 'swiper/react'

import { PagesProductsData } from '../../interfaces/ProductData'

interface ProductsProps {
  products: PagesProductsData[]
}

export function CardSlider({ products }: ProductsProps) {
  const settings: SliderSettings = {
    spaceBetween: 4,
    speed: 1000,
    slidesPerView: 4,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 50,
        slidesPerView: 1,
      },
      420: {
        spaceBetween: 30,
        slidesPerView: 1,
      },
      500 : {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 1,
        slidesPerView: 2,
        modules: [Navigation, A11y],
      },
      800: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
      990: {
        pagination: false,
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
        pagination: false,
        spaceBetween: 1,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: false,
      }
    },
  }

  return (
    <Slider settings={settings}>
      {products.map((product) => (
        <SwiperSlide key={product.name}>
          <CardProducts product={product} />
        </SwiperSlide>
      ))}
    </Slider>
  )
}
