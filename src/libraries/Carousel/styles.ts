import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const SwiperContainer = styled(Swiper)`
  width: 100%;

  .swiper-slide {
    width: 100%;
    height: 100%;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .swiper-pagination {
    margin-top: 30px;
    position: relative;
  }

  &.swiper-pagination-bullet,
  span {
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

  @media (max-width: 600px) {
    .swiper-pagination {
      margin-top: 20px;
    }

    &.swiper-pagination-bullet,
    span {
      width: 80px;
      height: 8px;
    }
  }

  @media (max-width: 500px) {
    .swiper-pagination {
      margin-top: 10px;
    }

    &.swiper-pagination-bullet,
    span {
      width: 60px;
      height: 6px;
    }
  }
`
