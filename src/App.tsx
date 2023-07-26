import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AppRoutes } from './routes'

import { CartProvider } from './context/CartContext'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <CartProvider>
          <AppRoutes />
          <ToastContainer autoClose={2000}/>
          <GlobalStyle />
        </CartProvider>
      </Theme>
    </BrowserRouter>
  )
}

export default App
