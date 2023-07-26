import { Container } from './styles'

import { currencyFormat } from '../../../../../helpers/currencyFormat'
import { ConfirmOrder } from '../../../../../components/ConfirmOrder'

import { useCart } from '../../../../../hooks/useCart'

import { FaTrashAlt } from 'react-icons/fa'

import minusImg from '../../../../../assets/circle-minus.svg'
import plusImg from '../../../../../assets/circle-plus.svg'

export default function TableMobile() {
  const { cart, removeProductFromCart, productCartIncrement, productCartDecrement } = useCart()

  return (
    <Container>
      {cart.map((item) => (
        <div key={`${item.name}`} className='order-item'>
          <div>
            <img src={item.img} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button type='button' onClick={() => productCartDecrement(item)}>
                  <img src={minusImg} alt='Remover quantidade' />
                </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button type='button' onClick={() => productCartIncrement(item)}>
                  <img src={plusImg} alt='Adicionar quantidade' />
                </button>
              </div>
              <button type='button' onClick={() => removeProductFromCart(item)}>
                <FaTrashAlt />
              </button>
            </div>
            {item.blackFriday && (
              <h5>
                Subtotal
                <span>
                  {' '}
                  {currencyFormat(((item.price * (100 - item.discount!)) / 100) * item.quantity)}
                </span>
              </h5>
            )}
            {!item.blackFriday && (
              <h5>
                Subtotal<span> {currencyFormat(item.price * item.quantity)}</span>
              </h5>
            )}
          </div>
        </div>
      ))}
      <ConfirmOrder />
    </Container>
  )
}
