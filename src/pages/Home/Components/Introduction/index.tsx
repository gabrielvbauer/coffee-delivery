import {
  IntroContainerBackground,
  IntroContainer,
  ItemsContainer,
  ShoppingItem,
  CoffeeItem,
  PackageItem,
  ShippingItem,
} from './styles'

import coffee from '../../../../assets/coffe_art.png'

import {
  Clock,
  Coffee,
  Package,
  ShoppingCart,
} from 'phosphor-react'

export function Introduction() {
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
    </>
  )
}