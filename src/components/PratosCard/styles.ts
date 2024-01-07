import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  position: relative;
  img {
    position: relative;
    top: 4px;
  }

  .capa {
    width: 471px;
    height: 217px;
    object-fit: cover;
  }
`

export const Titutlo = styled.h3`
  display: block;

  font-weight: bold;
  font-size: 18px;
  text-decoration: none;

  margin-top: 8px;
`

export const Cardbase = styled.section`
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

export const Descricao = styled.p`
  display: block;
  margin-bottom: 16px;

  font-size: 14px;
  line-height: 22px;
`

export const Avaliacao = styled.span`
  color: ${cores.Laranja};
  font-size: 18px;
  font-weight: 700;
  position: relative;
  top: -26px;
  left: 400px;
`
export const ImgAvaliacao = styled.img`
  padding-left: 8px;
  padding-bottom: 1px;
`

export const Destacados = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 16px;
  &.tagvisivel {
    display: flex;
  }
`
export const TagDestacado = styled.div`
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 80px;

  background-color: ${cores.Laranja};
  color: ${cores.Branco};

  padding: 4px 6px;
  font-size: 10px;
  font-weight: bold;
`
export const TagCategory = styled.div`
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 30px;

  background-color: ${cores.Laranja};
  color: ${cores.Branco};

  padding: 4px 6px;
  font-size: 10px;
  font-weight: bold;
`
