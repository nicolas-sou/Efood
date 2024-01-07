import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.bege};
  color: ${cores.Laranja};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 84px;
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.Laranja};
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 7px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`
