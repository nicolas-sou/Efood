import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  object-fit: cover;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-size: cover;
  font-weight: bold;
  padding-top: 50px;

  a {
    text-decoration: none;
    color: ${cores.Laranja};
    font-size: 20px;
    font-weight: 900;
  }
`

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    cursor: pointer;
  }
`

export const Logo = styled.img`
  position: relative;
  left: 45px;
`

export const Banner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 280px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.4;
  }
`
export const Titulo = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${cores.Branco};
  margin-right: 30px;

  p {
    font-weight: 100;
    position: absolute;
    font-size: 32px;
    line-height: 37.5px;
    top: 51px;
    left: 18.8vw;
  }
  h2 {
    font-weight: bold;
    position: absolute;
    font-size: 32px;
    top: 210px;
    left: 18.8vw;
    z-index: 1;
  }
`
