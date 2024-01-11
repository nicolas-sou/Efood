import Button from '../Button'
import {
  Card,
  Descricao,
  Titutlo,
  TagDestacado,
  Cardbase,
  Avaliacao,
  ImgAvaliacao,
  TagCategory
} from './styles'

import estrela from '../../assets/images/Estrela.png'

type Props = {
  id: number
  title: string
  category: string
  description: string
  infos: number
  image: string
  destacados: string[]
}

const Produto = ({
  id,
  title,
  category,
  description,
  infos,
  image,
  destacados
}: Props) => {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  const getDescricaoHome = (description: string) => {
    if (description.length > 123) {
      return description.slice(0, 210) + '...'
    }
    return description
  }
  return (
    <Card>
      <img src={image} alt={title} className="capa" />
      <TagCategory>{capitalizeFirstLetter(category)}</TagCategory>
      <div>
        {destacados.map((destacado) => (
          <TagDestacado key={destacado}>{destacado}</TagDestacado>
        ))}
      </div>
      <Cardbase>
        <Titutlo>{title}</Titutlo>
        <Avaliacao className="classificacao">
          {infos}
          <ImgAvaliacao src={estrela} alt="classificaçao" />
        </Avaliacao>
        <Descricao>{getDescricaoHome(description)}</Descricao>
        <Button type="link" title="Detalhes" to={`/menu/${id}`}>
          Saiba mais
        </Button>
      </Cardbase>
    </Card>
  )
}

export default Produto
