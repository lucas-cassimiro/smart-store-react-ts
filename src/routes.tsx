import { Routes, Route } from 'react-router-dom';

import MainPage from "./pages/Main/index";
import Home from './pages/Main/Home';
import IPhones from './pages/Main/IPhones';
import Androids from './pages/Main/Androids';
import Smartwatchs from './pages/Main/Smartwatchs';
import Fones from './pages/Main/Fones';
import BlackFriday from './pages/Main/BlackFriday';
import Cart from './pages/Main/Cart';

export function AppRoutes(){
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Home />} />
        <Route path='/iphones' element={<IPhones />} />
        <Route path='/androids' element={<Androids />} />
        <Route path='/smartwatchs' element={<Smartwatchs />} />
        <Route path='/fones-de-ouvido' element={<Fones />} />
        <Route path='/blackfriday' element={<BlackFriday />} />
        <Route path='/carrinho-de-compras' element={<Cart />} />
      </Route>
    </Routes>
  )
}
