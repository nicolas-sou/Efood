import PratosHome from '../PratosHome'
import HomePratos from '../models/PratosHome'
import { List, Container } from './styles'

export type Props = {
  homepratos: HomePratos[]
}

const HomeList = ({ homepratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {homepratos.map((homepratos) => (
          // eslint-disable-next-line react/jsx-key
          <PratosHome
            imgprato={homepratos.imgprato}
            title={homepratos.title}
            description={homepratos.description}
            avalia={homepratos.avalia}
            numavali={homepratos.numavali}
            infos={homepratos.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default HomeList
