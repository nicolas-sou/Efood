import { styled } from 'styled-components'
import { cores } from '../../styles'

export const ListaPedidos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 30px;
`
export const ContainerMenu = styled.section`
  display: flex;
  justify-content: center;
  margin: 60px 0;
`
export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  top: 25%;
  left: 22.7%;
  width: 54.7%;
  height: 344px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${cores.Laranja};
  color: ${cores.Branco};
`
export const ModalPedido = styled.div`
  padding: 20px;

  img {
    object-fit: cover;
    position: absolute;
    top: 10px;
    right: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 30px;
  }

  p {
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`
export const ModalImagem = styled.img`
  object-fit: cover;
  margin-left: 30px;
  width: 280px;
  height: 280px;
`
export const ModalBotao = styled.button`
  border: none;
  width: 218px;
  height: 24px;
  padding: 2px;

  font-weight: 700;
  font-size: 14px;

  background-color: ${cores.bege};
  color: ${cores.Laranja};
`
