import expresso from '../../../../assets/coffes/expresso.png'

import {
  Minus,
  Plus,
  ShoppingCart,
} from 'phosphor-react'

import {
  CardContainer,
  AddCoffeeToCartButton,
  AmmountSelector,
  Badge,
  Footer,
  Price,
  Actions,
} from './styles'

export type Coffee = {
  id: string
  name: string
  description: string
  image: string
  traits: string[]
  price: number
  priceFormatted: string
}

interface CoffeeProps {
  coffee: Coffee
}

export function Coffee({ coffee }: CoffeeProps) {
  return (
    <CardContainer>
      <img src={coffee.image} alt="Café expresso" />
      <Badge>
        {coffee.traits.map((trait) => 
          <span>{trait}</span>
        )}
      </Badge>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <Footer>
        <Price>
          <span>R$</span>
          <span>{coffee.priceFormatted}</span>
        </Price>

        <Actions>
          <AmmountSelector>
            <Minus />
            <span>1</span>
            <Plus />
          </AmmountSelector>
          <AddCoffeeToCartButton>
            <ShoppingCart weight="fill" />
          </AddCoffeeToCartButton>
        </Actions>
      </Footer>
    </CardContainer>
  )
}