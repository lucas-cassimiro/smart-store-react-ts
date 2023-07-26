import { Head } from '../../../components/Head'

// import IPhoneDesktop from './Telas/IPhonesDesktop'

import { androids } from './AndroidsData'
import Screens from './Telas'
import AndroidDesktop from './Telas/AndroidsDesktop'

export default function Androids() {
  return (
    <>
      <Screens androids={androids} />
    </>
  )
}
