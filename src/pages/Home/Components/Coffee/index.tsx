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
  BadgeContainer,
  Badge,
  Footer,
  Price,
  Actions,
} from './styles'
import { useState } from 'react'

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
  onAddCoffeeToCartButton: (coffeeId: string, quantity: number) => void
}

export function Coffee({ coffee, onAddCoffeeToCartButton }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const [isCoffeeAddedToCart, setIsCoffeeAddedToCart] = useState(false)

  function onRaiseCoffeeQuantity() {
    setQuantity((prevState) => prevState + 1)
  }

  function onLowerCoffeeQuantity() {
    setQuantity((prevState) => prevState - 1)
  }

  function onAddCoffeeToCartButtonClick() {
    if (isCoffeeAddedToCart) {
      return;
    }
    
    onAddCoffeeToCartButton(coffee.id, quantity)
    setIsCoffeeAddedToCart(true)
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt="Café expresso" />
      <BadgeContainer>
        {coffee.traits.map((trait) => 
          <Badge key={`${coffee.id}-${trait}`}>
            <span>{trait}</span>
          </Badge>
        )}
      </BadgeContainer>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <Footer>
        <Price>
          <span>R$</span>
          <span>{coffee.priceFormatted}</span>
        </Price>

        <Actions>
          <AmmountSelector>
            <Minus onClick={onLowerCoffeeQuantity} />
            <span>{quantity}</span>
            <Plus onClick={onRaiseCoffeeQuantity} />
          </AmmountSelector>
          <AddCoffeeToCartButton isAddedToCart={isCoffeeAddedToCart} onClick={onAddCoffeeToCartButtonClick}>
            <ShoppingCart weight="fill" />
          </AddCoffeeToCartButton>
        </Actions>
      </Footer>
    </CardContainer>
  )
}