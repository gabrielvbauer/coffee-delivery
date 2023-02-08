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

export function Coffee() {
  return (
    <CardContainer>
      <img src={expresso} alt="Café expresso" />
      <Badge>
        <span>TRADICIONAL</span>
      </Badge>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <Footer>
        <Price>
          <span>R$</span>
          <span>9,90</span>
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