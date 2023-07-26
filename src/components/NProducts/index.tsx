//import { ProductData } from '../../interfaces/ProductData'
import { Container } from './styles'
import { currencyFormat } from '../../helpers/currencyFormat'
import { PagesProductsData } from '../../interfaces/ProductData'

interface NewsProps {
  product: PagesProductsData
}

export default function NewsProduct({ product }: NewsProps) {
  return (
    <Container>
      <div>
        <img src={product.img} />
      </div>
      <h2>{product.name}</h2>
      <p>
        A partir de <span>{currencyFormat(product.price)} </span>
      </p>
    </Container>
  )
}
