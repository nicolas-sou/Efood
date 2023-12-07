import { Container, Logo, LogoSite, DescricaoFooter } from './styled'

import ImgLogo from '../../assets/images/logo.png'
import ImgInstagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import ImgFecebook from '../../assets/images/facebook-round-svgrepo-com 1.png'
import ImgTwitter from '../../assets/images/twitter-2-svgrepo-com 1.png'

const Footer = () => (
  <Container>
    <div className="container">
      <LogoSite>
        <img src={ImgLogo} alt="Logo do site" />
      </LogoSite>
      <Logo>
        <img src={ImgInstagram} alt="Instagram" />
        <img src={ImgFecebook} alt="Fecebook" />
        <img src={ImgTwitter} alt="Twitter" />
      </Logo>
      <DescricaoFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </DescricaoFooter>
    </div>
  </Container>
)

export default Footer
