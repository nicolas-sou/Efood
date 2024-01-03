import { HeaderBar, LinkItem, LinkCarrinho } from './styles'
import FundoImg from '../../assets/images/fundo.png'
import ImgLogo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <>
    <HeaderBar style={{ backgroundImage: `url(${FundoImg})` }}>
      <div>
        <nav>
          <ul>
            <LinkItem>
              <Link to="/">Restaurante</Link>
            </LinkItem>
          </ul>
        </nav>
      </div>
      <img src={ImgLogo} alt="Logo do site" />
      <LinkCarrinho>
        <a href="#">0 - Produto(s) no carrinho</a>
      </LinkCarrinho>
    </HeaderBar>
  </>
)

export default Header
