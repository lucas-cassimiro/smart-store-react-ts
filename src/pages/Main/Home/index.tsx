import { Container } from './styles'

import { BlackFriday, Whatsapp } from '../../../components/Banners'

import Carousel from '../../../libraries/Carousel'

import { products } from './ProductsData'

import { CardSlider } from '../../../libraries/CardsCarousel/CardCarousel'

import { NewsSlider } from '../../../libraries/CardsCarousel/NewsCarousel'

import { news } from './NewsData'
import Title from '../../../components/Title'
import { Head } from '../../../components/Head'

export default function Home() {
  return (
    <Container>
      <Head title='Home' />
      <Carousel />
      <Title>Novidades</Title>
      <NewsSlider products={news} />
      <Title>Black Friday</Title>
      <BlackFriday />
      <CardSlider products={products} />
      <Whatsapp />
    </Container>
  )
}
