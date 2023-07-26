import { useEffect, useState } from 'react'

import { PagesProductsData } from '../../../../interfaces/ProductData'
import SmartwatchsDesktop from './SmartwatchsDesktop'
import SmartwatchsMobile from './SmartwatchsMobile'

interface ProductProps {
  relogios: PagesProductsData[]
}

export default function Screens({ relogios }: ProductProps) {
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
    <SmartwatchsDesktop relogios={relogios} />
  ) : (
    <SmartwatchsMobile relogios={relogios} />
  )
}
