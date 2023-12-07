/* eslint-disable react/no-children-prop */
import Tag from '../Tag'
import {
  Card,
  Titulo,
  Descricao,
  CardImg,
  Avaliacao,
  Infos,
  ImgAvaliacao
} from './styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  imgprato: string
  avalia: string
  infos: string[]
  numavali: number
}

const PratosHome = ({
  title,
  description,
  imgprato,
  avalia,
  infos,
  numavali
}: Props) => (
  <CardImg>
    <img src={imgprato} alt={title} />
    <Infos>
      {infos.map((infos) => (
        <Tag key={infos}>{infos}</Tag>
      ))}
    </Infos>
    <Card>
      <Titulo>{title}</Titulo>
      <Avaliacao>
        {numavali}
        <ImgAvaliacao src={avalia} alt={title} />
      </Avaliacao>
      <Descricao>{description}</Descricao>
      <Link to="/cardapio" className="link-estilizado">
        Saiba mais
      </Link>
    </Card>
  </CardImg>
)

export default PratosHome
