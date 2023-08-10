import styled from 'styled-components'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export const SwiperContainer = styled(Swiper)`
  margin-bottom: 2.1875rem;

  width: 90%;
  padding: 0 40px;

  align-self: center;

  .swiper-wrapper {
    z-index: 0;
  }

  .swiper-pagination {
    position: relative;
    margin-top: 40px;
  }

  .swiper-pagination-bullet {
    background: #9e9e9ede;
    opacity: 1;
    transition: 0.3s ease-in-out;

    &.swiper-pagination-bullet-active {
      background-color: #313131;
    }
  }

  @media (max-width: 1500px) {
    width: 95%;
  }

  @media (max-width: 500px) {
    padding: 0;

    .swiper-pagination {
      margin-top: 20px;
      position: relative;
    }
  }

  @media (max-width: 990px) {
    padding: 0;
  }
`
