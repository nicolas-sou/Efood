import Footer from '../../Footer'
import Hero from '../../Hero'
import HomeList from '../../ListaHome'
import HomePratos from '../../models/PratosHome'

import PratoJapones from '../../../assets/images/Sushi.png'
import Avalia from '../../../assets/images/Estrela.png'
import PratoItaliano from '../../../assets/images/Trattoria.png'

const cardapioHome: HomePratos[] = [
  {
    imgprato: PratoJapones,
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    avalia: Avalia,
    numavali: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    imgprato: PratoItaliano,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    avalia: Avalia,
    numavali: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    imgprato: PratoItaliano,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    avalia: Avalia,
    numavali: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    imgprato: PratoItaliano,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    avalia: Avalia,
    numavali: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    imgprato: PratoItaliano,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    avalia: Avalia,
    numavali: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    imgprato: PratoItaliano,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    avalia: Avalia,
    numavali: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Hero />
    <HomeList homepratos={cardapioHome} />
    <Footer />
  </>
)

export default Home
