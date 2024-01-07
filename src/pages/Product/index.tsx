import { useParams } from 'react-router-dom'
import { useGetFeaturedRestaurantMenuQuery } from '../../services/api'
import Pratos from '../../components/Pratos'
import Header from '../../components/Header'

const Product = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetFeaturedRestaurantMenuQuery(id!)
  if (!restaurant) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Header restaurant={restaurant} />
      <Pratos items={restaurant.cardapio} />
    </>
  )
}

export default Product
