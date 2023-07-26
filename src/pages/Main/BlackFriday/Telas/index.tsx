import { useEffect, useState } from 'react'

import { PagesProductsData } from '../../../../interfaces/ProductData'

import BlackFridayDesktop from './BlackFridayDesktop'
import BlackFridayMobile from './BlackFridayMobile'

interface ProductProps {
  blackfriday: PagesProductsData[]
}

export default function Screens({ blackfriday }: ProductProps) {
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

  return windowWidth > 990 ? (
    <BlackFridayDesktop blackfriday={blackfriday} />
  ) : (
    <BlackFridayMobile blackfriday={blackfriday} />
  )
}
