import Pratos from '../Pratos'
import Prato from '../models/Pratos'
import { Lista, Container } from './styles'

export type Props = {
  pratos: Prato[]
}

const PratosLista = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <Lista>
        {pratos.map((pratos) => (
          <Pratos
            key={pratos.id}
            image={pratos.image}
            title={pratos.title}
            description={pratos.description}
          />
        ))}
      </Lista>
    </div>
  </Container>
)

export default PratosLista
