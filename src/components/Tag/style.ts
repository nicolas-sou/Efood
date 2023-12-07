import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.Laranja};
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: flex;
`
