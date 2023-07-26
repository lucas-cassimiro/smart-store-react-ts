import { useEffect, useState } from 'react'

//import IPhoneDesktop from './IPhonesDesktop'
//import IPhoneMobile from './IPhonesMobile'
// import { PagesProductsData } from '../../../../interfaces/ProductData'
import TableDesktop from './TableDesktop'
import TableMobile from './TableMobile'
import { useCart } from '../../../../hooks/useCart'

import { EmptyCart } from '../../../../components/EmptyCart'

export default function Screens() {
  const { cart } = useCart()

  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)

  useEffect(() => {
    function updateTableComponentBasedInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth
      setWindowWidth(currentWidth)
    }
    window.addEventListener('resize', updateTableComponentBasedInWindowWidth)

    return () => {
      window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
    }
  }, [])

    if (cart.length === 0) return <EmptyCart title='Ops! Seu carrinho está vazio' />

  return windowWidth > 990 ? (
    <TableDesktop />
  ) : (
    <TableMobile  />
  )
}
