import { Route, Routes } from 'react-router-dom'
import Cardapio from './components/pages/Cardapio'
import Home from './components/pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio" element={<Cardapio />} />
  </Routes>
)

export default Rotas
