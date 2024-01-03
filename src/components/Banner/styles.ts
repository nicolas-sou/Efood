import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-position: center;
  background-size: cover;
  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 29%;
    top: 19.1%;
    left: 0;
    content: '';
    opacity: 0.2;
  }
`
export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.Branco};
  position: absolute;
  z-index: 1;
`
export const Tipo = styled.p`
  color: ${cores.Branco};
  font-size: 32px;
  font-weight: 100;
  padding-top: 34px;
  margin-bottom: 7%;
`

export const Container = styled.div`
  margin-left: 11%;
`
