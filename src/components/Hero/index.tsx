import { FundoSite, Text, LogoSite } from './styles'
import Fundo from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.png'

const Hero = () => (
  <FundoSite style={{ backgroundImage: `url(${Fundo})` }}>
    <div className="container">
      <LogoSite>
        <img src={Logo} alt="Logo do site" />
      </LogoSite>
      <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
    </div>
  </FundoSite>
)

export default Hero
