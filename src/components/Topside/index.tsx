import { useState } from 'react'

import { Container } from './styles'

import { Link } from 'react-router-dom'

import IconLocation from '../../assets/icon-location.png'
import IconCart from '../../assets/icon-cart.png'
import { FaTimes, FaBars } from 'react-icons/fa'

import { useCart } from '../../hooks/useCart'
import Locationn from '../../pages/Main/Location'
import Sidebar from '../Sidebar'

export default function Header() {
  const { cart } = useCart()

  const productExistent = cart.find((item) => item)

  const [sidebar, setSidebar] = useState<boolean>(false)
  const showSidebar = () => setSidebar(!sidebar)

  const [location, setLocation] = useState<boolean>(false)
  const showLocation = () => setLocation(!location)

  return (
    <Container location={location} sidebar={sidebar}>
      <div>
        <p>
          A melhor franquia de smartphones do<span>Brasil</span>
        </p>

        <a href='#'>SEJA UM REVENDEDOR</a>
      </div>

      <div>
        <div>
          <img src={IconLocation} alt='Icone de localização' />

          <a onClick={showLocation}>Selecione uma localização</a>

          <aside>
            <FaTimes onClick={showLocation} />
            <Locationn />
          </aside>
        </div>
        <div>
          <h1>
            <Link to={'/'}>Smart Store</Link>
          </h1>
        </div>

        <div>
          <Link to={'/carrinho-de-compras'}>
            <div>
              {productExistent && <section>{cart.length}</section>}
              <img src={IconCart} alt='Imagem do carrinho' />
            </div>
          </Link>
        </div>
      </div>

      <nav>
        <button>
          <FaBars onClick={showSidebar} />
          <aside>
            <FaTimes onClick={showSidebar} />
            <Sidebar />
          </aside>
        </button>
        <ul>
          <li>
            <Link to='/iphones'>iPhones</Link>
          </li>
          <li>
            <Link to='/androids'>Androids</Link>
          </li>
          <li>
            <Link to='/smartwatchs'>Smartwatchs</Link>
          </li>
          <li>
            <Link to='/fones-de-ouvido'>Fones bluetooth</Link>
          </li>
          <li>
            <Link to='/blackfriday'>Black Friday</Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
