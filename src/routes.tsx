import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu/:id" element={<Product />} />
  </Routes>
)
export default Rotas
