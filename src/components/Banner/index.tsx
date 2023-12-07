import { Imagem, Titulo, Tipo, Container } from './styles'

import bannerImg from '../../assets/images/fundoItaliana.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <Tipo>Italiana</Tipo>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </Container>
  </Imagem>
)

export default Banner
