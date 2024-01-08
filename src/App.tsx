import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import { GlobalCss } from './styles'
import Carrinho from './components/Carrinho'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Carrinho />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
export default App
