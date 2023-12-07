import { ButtonContainer } from '../Button/styles'
import { Card, Titulo, Descricao } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Pratos = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <ButtonContainer>Adicionar ao carrinho</ButtonContainer>
  </Card>
)

export default Pratos
