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

  @media (max-width: 1500px) {
    width: 95%;
  }

  @media (max-width: 420px) {
    padding: 0;

    .swiper-pagination {
      margin-top: 30px;
      position: relative;
    }

    &.swiper-pagination-bullet {
      width: 100px;
      height: 11px;
      background: #9e9e9ede;
      opacity: 1;
      border: 0;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      border-radius: 0;

      &.swiper-pagination-bullet-active {
        background-color: #313131;
      }
    }
  }

  @media (max-width: 990px) {
    padding: 0;
  }
`
