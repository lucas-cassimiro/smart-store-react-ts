import { currencyFormat } from '../../helpers/currencyFormat'
import { PagesProductsData } from '../../interfaces/ProductData'

import { useCart } from '../../hooks/useCart'

import HalfRating from '../Rating'

import { BsFillCartPlusFill } from 'react-icons/bs'

import { Container } from './styles'

interface ProductProps {
  product: PagesProductsData
}

export default function CardProducts({ product }: ProductProps) {
  const { cart, addProductIntoCart } = useCart()

  const productExistent = cart.find((item) => item.id === product.id && item.name === product.name)

  return (
    <Container>
      <img src={product.img} alt={product.name} />
      <div>
        <div>
          {product.blackFriday && <p>-{product.discount}%</p>}
          {product.blackFriday && <p>Black Friday</p>}
        </div>
        <h4>{product.name}</h4>
        <HalfRating star={product.rating!} />

        {product.blackFriday && <p>{currencyFormat(product.price)}</p>}

        {product.discount && (
          <section>
            <p>{currencyFormat((product.price * (100 - product.discount)) / 100)}</p>

            <button type='button' onClick={() => addProductIntoCart(product)}>
              {productExistent && <span>{productExistent.quantity}</span>}
              <BsFillCartPlusFill />
            </button>
          </section>
        )}

        {!product.blackFriday && (
          <section>
            <p>{currencyFormat(product.price)}</p>
            <button type='button' onClick={() => addProductIntoCart(product)}>
              {productExistent && <span>{productExistent.quantity}</span>}
              <BsFillCartPlusFill />
            </button>
          </section>
        )}

        {!product.blackFriday && <p>Ou 12x de {currencyFormat(product.price / 12)}</p>}

        {product.blackFriday && (
          <p>Ou 12x de {currencyFormat((product.price * (100 - product.discount!)) / 100 / 12)}</p>
        )}
      </div>
    </Container>
  )
}
