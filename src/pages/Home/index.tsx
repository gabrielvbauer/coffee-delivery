import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

import { Introduction } from './Components/Introduction'
import { Coffee } from './Components/Coffee'

import {
  OurCoffeeContainer,
  CoffeeListContainer,
} from './styles'

const coffeesList: Coffee[] = [
  {
    id: '1a',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    traits: [
      'TRADICIONAL',
    ],
    image: '/src/assets/coffes/expresso.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '2a',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    traits: [
      'TRADICIONAL',
    ],
    image: '/src/assets/coffes/americano.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '3a',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    traits: [
      'TRADICIONAL',
    ],
    image: '/src/assets/coffes/expresso_cremoso.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '4a',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    traits: [
      'TRADICIONAL',
      'GELADO'
    ],
    image: '/src/assets/coffes/cafe_gelado.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '5a',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    traits: [
      'TRADICIONAL',
      'COM LEITE'
    ],
    image: '/src/assets/coffes/cafe_com_leite.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '6a',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    traits: [
      'TRADICIONAL',
      'COM LEITE'
    ],
    image: '/src/assets/coffes/latte.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '7a',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    traits: [
      'TRADICIONAL',
      'COM LEITE'
    ],
    image: '/src/assets/coffes/capuccino.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '8a',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    traits: [
      'TRADICIONAL',
      'COM LEITE'
    ],
    image: '/src/assets/coffes/macchiato.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '9a',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    traits: [
      'TRADICIONAL',
      'COM LEITE'
    ],
    image: '/src/assets/coffes/mochaccino.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '1b',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    traits: [
      'ESPECIAL',
      'COM LEITE'
    ],
    image: '/src/assets/coffes/chocolate_quente.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '2b',
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    traits: [
      'ESPECIAL',
      'ALCOÓLICO',
      'GELADO'
    ],
    image: '/src/assets/coffes/cubano.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '3b',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    traits: [
      'ESPECIAL'
    ],
    image: '/src/assets/coffes/havaiano.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '4b',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    traits: [
      'ESPECIAL'
    ],
    image: '/src/assets/coffes/arabe.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
  {
    id: '5b',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    traits: [
      'ESPECIAL',
      'ALCOÓLICO'
    ],
    image: '/src/assets/coffes/irlandes.png',
    price: 9.90,
    priceFormatted: '9,90',
  },
]

export function Home() {
  const {itemList, addItemToCart} = useContext(ShoppingCartContext)

  console.info(itemList)

  return (
    <>
      <Introduction />
      <OurCoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeListContainer>
          {coffeesList.map((coffee) => 
            <Coffee 
              key={coffee.id}
              coffee={coffee}
              addItemToCart={addItemToCart}
            />
          )}
        </CoffeeListContainer>
      </OurCoffeeContainer>
    </>
  )
}
