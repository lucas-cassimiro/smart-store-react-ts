import { useEffect, useState } from 'react'

import { PagesProductsData } from '../../../../interfaces/ProductData'
import FonesDesktop from './FonesDesktop'
import FonesMobile from './FonesMobile'

interface ProductProps {
  fones: PagesProductsData[]
}

export default function Screens({ fones }: ProductProps) {
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
    <FonesDesktop fones={fones} />
  ) : (
    <FonesMobile fones={fones} />
  )
}
