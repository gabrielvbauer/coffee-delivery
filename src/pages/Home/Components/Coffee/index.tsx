import { useContext, useState } from 'react'
import { AmountSelector } from '../../../../components/AmountSelector'

import {
  ShoppingCart,
} from 'phosphor-react'

import {
  CardContainer,
  AddCoffeeToCartButton,
  BadgeContainer,
  Badge,
  Footer,
  Price,
  Actions,
} from './styles'
import { ShoppingCartContext } from '../../../../context/ShoppingCartContext'

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
  addItemToCart: (coffee: Coffee, quantity: number) => void
}

export function Coffee({ coffee, addItemToCart }: CoffeeProps) {
  const {raiseItemQuantity, lowerItemQuantity, itemList} = useContext(ShoppingCartContext)
  const itemAddedInShoppingCart = itemList.find((item) => item.coffee.id === coffee.id)

  const [quantity, setQuantity] = useState(itemAddedInShoppingCart ? itemAddedInShoppingCart.quantity : 1)

  function onRaiseCoffeeQuantity() {
    setQuantity((prevState) => prevState + 1)
    raiseItemQuantity(coffee.id)
  }

  function onLowerCoffeeQuantity() {
    setQuantity((prevState) => prevState - 1)
    lowerItemQuantity(coffee.id)
  }

  function onAddCoffeeToCartButtonClick() {
    if (itemAddedInShoppingCart) {
      return;
    }
    
    addItemToCart(coffee, quantity)
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
          {/* <AmmountSelector>
            <Minus onClick={onLowerCoffeeQuantity} />
            <span>{quantity}</span>
            <Plus onClick={onRaiseCoffeeQuantity} />
          </AmmountSelector> */}
          <AmountSelector
            coffeeQuantity={quantity}
            onLowerAmount={() => onLowerCoffeeQuantity()}
            onRaiseAmount={() => onRaiseCoffeeQuantity()}
          />
          <AddCoffeeToCartButton isAddedToCart={itemAddedInShoppingCart ? true : false} onClick={onAddCoffeeToCartButtonClick}>
            <ShoppingCart weight="fill" />
          </AddCoffeeToCartButton>
        </Actions>
      </Footer>
    </CardContainer>
  )
}