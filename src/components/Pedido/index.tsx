import { BotaoMenu, CardPedido, DescricaoMenu, TituloMenu } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
}

const Pedidos = ({ foto, nome, descricao }: Props) => {
  return (
    <CardPedido>
      <img src={foto} alt="Backgroud do Pedido" />
      <TituloMenu>{nome}</TituloMenu>
      <DescricaoMenu>{descricao}</DescricaoMenu>
      <BotaoMenu>Mais Detalhes</BotaoMenu>
    </CardPedido>
  )
}

export default Pedidos
