import { Link } from 'react-router-dom'

import { Banner, HeaderBar, Image, Logo, Titulo } from './styles'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/fundo.png'

import { Restaurante } from '../../pages/Home'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  restaurant: Restaurante
}

const Header = ({ restaurant }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const toUpperCase = (tipo: string) => {
    if (tipo === restaurant.tipo) {
      return restaurant.tipo[0].toUpperCase() + restaurant.tipo.substring(1)
    }
  }

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <HeaderBar>
        <Link to="/" className="link-home">
          Restaurantes
        </Link>
        <Logo src={logo} alt="Logo" />
        <a onClick={openCart}>
          {items.length} {''} produto(s) <span>no carrinho</span>
        </a>
      </HeaderBar>

      <Banner
        style={{
          backgroundImage: `url(${restaurant.capa})`
        }}
      >
        <Titulo>
          <h3>
            <i>{toUpperCase(restaurant.tipo)}</i>
          </h3>
          <h2>{restaurant.titulo}</h2>
        </Titulo>
      </Banner>
    </Image>
  )
}

export default Header
