import { useEffect, useState } from 'react'

import IPhoneDesktop from './IPhonesDesktop'
import IPhoneMobile from './IPhonesMobile'
import { PagesProductsData } from '../../../../interfaces/ProductData'

interface ProductProps {
  iphones: PagesProductsData[]
}

export default function Screens({ iphones }: ProductProps) {
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

  return windowWidth > 990 ? <IPhoneDesktop iphones={iphones} /> : <IPhoneMobile iphones={iphones} />
}
