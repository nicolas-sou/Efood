import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.Laranja};
  color: ${cores.bege};
  padding: 8px;
  margin-bottom: 56px;
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  margin: 8px;
`

export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin: 8px;
`
export const CardModal = styled.div`
  background-color: ${cores.Laranja};
  width: 1024px;
  height: 344px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
  }

  .content {
    max-width: 700px;
    margin-bottom: 30px;
  }
`

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  header {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  .Fechar {
    height: 16px;
    margin: 8px;
  }
`

export const Title = styled.span`
  color: ${cores.Branco};
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 10px;
`
export const DescricaoModal = styled.p`
  color: ${cores.Branco};
  font-weight: 400;
  font-size: 14px;
  margin: 32px 0px;
  display: block;
`
export const Sugerido = styled.span`
  color: ${cores.Branco};
  font-weight: 400;
  font-size: 14px;
  margin: 24px 0px;
  display: block;
`
