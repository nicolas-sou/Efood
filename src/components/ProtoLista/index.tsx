import Produto from '../PratosCard'
import { Restaurante } from '../../pages/Home'

import { Container, Lista } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const ProdutoLista = ({ restaurantes }: Props) => {
  const getTags = (restaurante: Restaurante) => {
    const tags = []

    if (restaurante.destacado === true) {
      tags.push('Destaque da semana')
    }
    return tags
  }
  return (
    <Container>
      <div className="container">
        <Lista>
          {restaurantes.map((restaurante) => (
            <Produto
              key={restaurante.id}
              id={restaurante.id}
              title={restaurante.titulo}
              category={restaurante.tipo}
              destacados={getTags(restaurante)}
              description={restaurante.descricao}
              image={restaurante.capa}
              infos={restaurante.avaliacao}
            />
          ))}
        </Lista>
      </div>
    </Container>
  )
}
export default ProdutoLista
