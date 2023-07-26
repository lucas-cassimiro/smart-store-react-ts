import { useSwiper } from 'swiper/react';

import Arrow from '../../../assets/arrow.png';

import { Container } from './styles';

export default function SliderButton() {
  const swiper = useSwiper()

  return (
    <Container>
      <button onClick={() => swiper.slidePrev()}>
        <img src={Arrow} alt='Seta de voltar' />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src={Arrow} alt='Seta de avançar' />
      </button>
    </Container>
  )
}
