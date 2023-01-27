import {
  IntroContainerBackground,
  IntroContainer,
  ItemsContainer,
  ShoppingItem,
  CoffeeItem,
  PackageItem,
  ShippingItem,
  OurCoffeeContainer,
  CoffeeListContainer,
  CoffeeCard,
  AddCoffeeToCartButton,
  AmmountSelector,
  Badge,
  CoffeeCardFooter,
  Price,
  Actions,
} from './styles'

import coffee from '../../assets/coffe_art.png'
import expresso from '../../assets/coffes/expresso.png'

import {
  Clock,
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
} from 'phosphor-react'

export function Home() {
  return (
    <>
      <IntroContainerBackground>
        <IntroContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ItemsContainer>
              <div>
                <ShoppingItem>
                  <ShoppingCart weight="fill" />
                </ShoppingItem>
                <span>Compra simples e segura</span>
              </div>

              <div>
                <PackageItem>
                  <Package weight="fill" />
                </PackageItem>
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <ShippingItem>
                  <Clock weight="fill" />
                </ShippingItem>
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <CoffeeItem>
                  <Coffee weight="fill" />
                </CoffeeItem>
                <span>O café chega fresquinho até você</span>
              </div>
            </ItemsContainer>
          </div>

          <img src={coffee} alt="" />
        </IntroContainer>
      </IntroContainerBackground>

      <OurCoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeListContainer>
          <CoffeeCard>
            <img src={expresso} alt="Café expresso" />
            <Badge>
              <span>TRADICIONAL</span>
            </Badge>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
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
            </CoffeeCardFooter>
          </CoffeeCard>

          <CoffeeCard>
            <img src={expresso} alt="Café expresso" />
            <Badge>
              <span>TRADICIONAL</span>
            </Badge>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
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
            </CoffeeCardFooter>
          </CoffeeCard>

          <CoffeeCard>
            <img src={expresso} alt="Café expresso" />
            <Badge>
              <span>TRADICIONAL</span>
            </Badge>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
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
            </CoffeeCardFooter>
          </CoffeeCard>

          <CoffeeCard>
            <img src={expresso} alt="Café expresso" />
            <Badge>
              <span>TRADICIONAL</span>
            </Badge>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
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
            </CoffeeCardFooter>
          </CoffeeCard>

          <CoffeeCard>
            <img src={expresso} alt="Café expresso" />
            <Badge>
              <span>TRADICIONAL</span>
            </Badge>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
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
            </CoffeeCardFooter>
          </CoffeeCard>
        </CoffeeListContainer>
      </OurCoffeeContainer>
    </>
  )
}
