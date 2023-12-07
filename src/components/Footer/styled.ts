import styled from 'styled-components'

import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege};
  height: 300px;
`

export const Logo = styled.div`
  text-align: center;
  img {
    margin: 32px 8px 80px 8px;
  }
`
export const LogoSite = styled.div`
  text-align: center;
  img {
    margin-top: 40px;
  }
`
export const DescricaoFooter = styled.p`
  font-size: 15px;
  text-align: center;
  max-width: 72%;
  margin: 0 auto;
`
