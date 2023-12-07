import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/style'

export const CardImg = styled.div`
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
  img {
    position: relative;
    top: 4px;
  }
`

export const Card = styled.div`
  background-color: ${cores.Branco};
  color: ${cores.Laranja};
  border: 1px solid;
  padding: 0px 8px 8px;
  margin-bottom: 56px;

  .link-estilizado {
    background-color: ${cores.Laranja};
    border: none;
    padding: 4px 6px;
    color: ${cores.bege};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
  }
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 18px;
  margin-top: 8px;
`

export const Avaliacao = styled.span`
  color: ${cores.Laranja};
  font-size: 18px;
  font-weight: 700;
  position: relative;
  top: -27px;
  left: 400px;
`
export const ImgAvaliacao = styled.img`
  padding-left: 8px;
  padding-bottom: 1px;
`

export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`
