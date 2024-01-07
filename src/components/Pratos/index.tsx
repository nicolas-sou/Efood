import { useState } from 'react'

import { add, open } from '../../store/reducers/cart'
import { Cardapio } from '../../pages/Home'
import Pedidos from '../Pedido'

import {
  ContainerMenu,
  ListaPedidos,
  Modal,
  ModalBotao,
  ModalContent,
  ModalImagem,
  ModalPedido
} from './styles'

import closemodal from '../../assets/images/Fechar.png'
import { useDispatch } from 'react-redux'

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

type Props = {
  items: Cardapio[]
}

interface ModalState {
  isVisible: boolean
}

const Pratos = ({ items }: Props) => {
  const dispatch = useDispatch()
  const [selectedProduct, setSelectedProduct] = useState<Cardapio>()
  const addToCart = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    dispatch(add(selectedProduct!))
    dispatch(open())
    setModal({
      isVisible: false
    })
  }
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })
  const getDescricao = (descricao: string) => {
    if (descricao.length > 123) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }
  const openModal = (product: Cardapio) => {
    setSelectedProduct(product)
    setModal({
      isVisible: true
    })
  }

  return (
    <>
      <ContainerMenu>
        <ListaPedidos>
          {items.map((items) => (
            <li key={items.id} onClick={() => openModal(items)}>
              <Pedidos
                foto={items.foto}
                nome={items.nome}
                descricao={getDescricao(items.descricao)}
              />
            </li>
          ))}
        </ListaPedidos>
      </ContainerMenu>
      {selectedProduct && (
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent>
            <div>
              <ModalImagem src={selectedProduct.foto} alt="Imagem do pedido" />
            </div>
            <ModalPedido>
              <img
                src={closemodal}
                alt="Close Icon"
                onClick={() => closeModal()}
              />
              <h2>{selectedProduct.nome}</h2>
              <p>
                {selectedProduct.descricao}
                <br />
                <br />
                Serve {selectedProduct.porcao}
              </p>
              <ModalBotao onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(selectedProduct.preco)}
              </ModalBotao>
            </ModalPedido>
          </ModalContent>
          <div onClick={() => closeModal()} className="overlay"></div>
        </Modal>
      )}
    </>
  )
}
export default Pratos
