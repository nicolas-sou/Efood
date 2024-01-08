import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Pratos'
import {
  Button,
  CarrinhoContainer,
  CarrinhoItem,
  Overlay,
  Prices,
  Sidebar,
  Title
} from './styles'

const Carrinho = () => {
  const [cart, setCart] = useState(true)
  const [emptyCart] = useState(false)

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const goToPurchase = () => {
    setCart(false)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CarrinhoContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar className={cart ? '' : 'is-closed'}>
        {items.length < 1 ? (
          <div>
            <Title>Carrinho vazio</Title>
          </div>
        ) : (
          <ul>
            {items.map((item) => (
              <CarrinhoItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} />
              </CarrinhoItem>
            ))}
          </ul>
        )}
        <Prices>
          Valor total <span>{formataPreco(getTotalPrice())}</span>
        </Prices>
        <Button
          className={emptyCart ? '' : 'emptyCart'}
          disabled={items.length < 1}
          onClick={goToPurchase}
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CarrinhoContainer>
  )
}

export default Carrinho
