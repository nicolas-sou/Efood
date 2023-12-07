import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  height: 186px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: ${cores.Laranja};
    text-decoration: none;
    font-weight: bold;
    font-size: 21px;
  }

  img {
    margin-left: 120px;
  }
`

export const LinkItem = styled.li`
  display: flex;
  align-items: center;
`

export const LinkCarrinho = styled.div`
  font-weight: bold;
  font-size: 21px;
`
