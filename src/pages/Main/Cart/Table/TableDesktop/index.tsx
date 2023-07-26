import { Container } from './styles'

import { currencyFormat } from '../../../../../helpers/currencyFormat'

import { useCart } from '../../../../../hooks/useCart'

import { FaTrashAlt } from 'react-icons/fa'

import { ConfirmOrder } from '../../../../../components/ConfirmOrder'

import minusImg from '../../../../../assets/circle-minus.svg'
import plusImg from '../../../../../assets/circle-plus.svg'

export default function TableDesktop() {
  const {
    cart,
    removeProductFromCart,
    productCartDecrement,
    productCartIncrement,
  } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.name}`}>
              <td>
                <img src={item.img} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => productCartDecrement(item)}>
                    <img src={minusImg} alt='Remover quantidade' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => productCartIncrement(item)}>
                    <img src={plusImg} alt='Adicionar quantidade' />
                  </button>
                </div>
              </td>
              <td>
                {!item.blackFriday && <h5>{currencyFormat(item.price * item.quantity)}</h5>}
                {item.blackFriday && (
                  <h5>
                    {currencyFormat(((item.price * (100 - item.discount!)) / 100) * item.quantity)}
                  </h5>
                )}
              </td>
              <td>
                <button type='button' onClick={() => removeProductFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  )
}
