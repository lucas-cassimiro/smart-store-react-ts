import { useEffect, useState } from 'react'

import AndroidsDesktop from './AndroidsDesktop'

import { PagesProductsData } from '../../../../interfaces/ProductData'
import AndroidsMobile from './AndroidsMobile'

interface ProductProps {
  androids: PagesProductsData[]
}

export default function Screens({ androids }: ProductProps) {
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
    <AndroidsDesktop androids={androids} />
  ) : (
    <AndroidsMobile androids={androids} />
  )
}
