import { styled } from 'styled-components'
import { cores } from '../../styles'

export const CardPedido = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background-color: ${cores.Laranja};
  color: ${cores.Branco};
  width: 320px;
  height: 338px;

  img {
    object-fit: cover;
    position: absolute;
    top: 5px;
    left: 8px;
    width: 304px;
    height: 167px;
  }
`
export const BotaoMenu = styled.button`
  width: 304px;
  height: 24px;

  margin: 10px 0 10px 8px;
  border: none;

  background-color: ${cores.bege};
  color: ${cores.Laranja};
`
export const DescricaoMenu = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 0 0 10px 8px;
  color: ${cores.bege};
`
export const TituloMenu = styled.h3`
  margin: 0 0 8px 8px;
  color: ${cores.bege};
`
