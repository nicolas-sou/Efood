import { ButtonContainer, ButtonPopup } from '../Button/styles'
import {
  Card,
  Titulo,
  Descricao,
  ModalContent,
  Title,
  DescricaoModal,
  Sugerido,
  Modal,
  CardModal
} from './styles'
import PratoPizza from '../../assets/images/Pizza2.png'
import Fechar from '../../assets/images/Fechar.png'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  image: string
}

type ModalState = {
  isVisible: boolean
}

const Pratos = ({ title, description, image }: Props) => {
  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })
  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <ButtonContainer
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          Adicionar ao carrinho
        </ButtonContainer>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <CardModal>
            <header>
              <img
                className="Fechar"
                src={Fechar}
                alt="Icone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </header>
            <div className="container">
              <img src={PratoPizza} />
              <div className="content">
                <Title>Pizza Marguerita</Title>
                <DescricaoModal>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.
                  <br />
                </DescricaoModal>
                <Sugerido>Serve: de 2 a 3 pessoas</Sugerido>
                <ButtonPopup>Adicionar ao carrinho - R$60,90</ButtonPopup>
              </div>
            </div>
          </CardModal>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Pratos
