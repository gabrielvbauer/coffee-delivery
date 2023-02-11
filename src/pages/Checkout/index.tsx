import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { AmountSelector } from '../../components/AmountSelector'

const DELIVER_PRICE = 3.5

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import {
  CheckoutContainer,
  AddressContainer,
  PaymentContainer,
  AddressHeader,
  AddressInputs,
  PaymentHeader,
  PaymentOptions,
  SelectedCoffeeContainer,
  Actions,
  ConfirmOrderButton,
  ListDivider,
  RemoveCoffeeFromCartButton,
  SummaryContainer,
  SummaryInfo,
  SectionTitle,
  CardTitle,
  CardDescription,
  CEPContainer,
  StreetContainer,
  MinorInfo,
  MajorInfo,
  CoffeeInfo,
  CoffeeTotal,
  SummaryTotal,
  SummaryTotalPrice,
} from './styles'

interface Pricing {
  itemsTotalPrice: number,
  itemsTotalPriceFormated: string
  deliverPrice: number
  deliverPriceFormated: string
  totalPrice: number
  totalPriceFormated: string
}

export function Checkout() {
  const {itemList, removeItemFromCart, raiseItemQuantity, lowerItemQuantity} = useContext(ShoppingCartContext)
  const [pricing, setPricing] = useState({
    itemsTotalPrice: 0,
    itemsTotalPriceFormated: 'R$ 0,00',
    deliverPrice: DELIVER_PRICE,
    deliverPriceFormated: DELIVER_PRICE.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
    totalPrice: 0,
    totalPriceFormated: 'R$ 0,00'
  } as Pricing)

  function onRemoveItemFromCart(coffeeId: string) {
    removeItemFromCart(coffeeId)
  }

  useEffect(() => {
    let itemsTotalPrice = 0
    let totalPrice = 0

    itemList.forEach((item) => {
      itemsTotalPrice += item.totalPrice
    })

    totalPrice = itemsTotalPrice + DELIVER_PRICE

    const newPricing: Pricing = {
      itemsTotalPrice: itemsTotalPrice,
      itemsTotalPriceFormated: itemsTotalPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
      deliverPrice: DELIVER_PRICE,
      deliverPriceFormated: DELIVER_PRICE.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
      totalPrice: totalPrice,
      totalPriceFormated: totalPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
    }

    setPricing(newPricing)
  }, [itemList])

  return (
    <CheckoutContainer>
      <main>
        <SectionTitle>Complete o seu pedido</SectionTitle>

        <AddressContainer>
          <AddressHeader>
            <MapPinLine size={22} />
            <div>
              <CardTitle>Endereço de Entrega</CardTitle>
              <CardDescription>Informe o endereço onde deseja receber seu pedido</CardDescription>
            </div>
          </AddressHeader>

          <AddressInputs>
            <CEPContainer>
              <input type="text" placeholder="CEP" />
            </CEPContainer>
            <StreetContainer>
              <input type="text" placeholder="Rua" />
            </StreetContainer>
            <MinorInfo>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </MinorInfo>
            <MajorInfo>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </MajorInfo>
          </AddressInputs>
        </AddressContainer>

        <PaymentContainer>
          <PaymentHeader>
            <CurrencyDollar size={22} />
            <div>
              <CardTitle>Pagamento</CardTitle>
              <CardDescription>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </CardDescription>
            </div>
          </PaymentHeader>

          <PaymentOptions>
            <div>
              <CreditCard />
              <span>CARTÃO DE CRÉDITO</span>
            </div>

            <div>
              <Bank />
              <span>CARTÃO DE DÉBITO</span>
            </div>

            <div>
              <Money />
              <span>DINHEIRO</span>
            </div>
          </PaymentOptions>
        </PaymentContainer>
      </main>
      <aside>
        <SectionTitle>Cafés selecionados</SectionTitle>
        
        <SummaryContainer>
          {itemList.map((item) => (
            <SelectedCoffeeContainer>
              <CoffeeInfo>
                <img src={item.coffee.image} alt="" />

                <div>
                  <span>{item.coffee.name}</span>
                  <Actions>
                    <AmountSelector
                      coffeeQuantity={item.quantity}
                      onLowerAmount={() => lowerItemQuantity(item.coffee.id)}
                      onRaiseAmount={() => raiseItemQuantity(item.coffee.id)}
                    />
                    <RemoveCoffeeFromCartButton onClick={() => onRemoveItemFromCart(item.coffee.id)}>
                      <Trash weight="fill" />
                      <span>REMOVER</span>
                    </RemoveCoffeeFromCartButton>
                  </Actions>
                </div>
              </CoffeeInfo>

              <CoffeeTotal>{item.totalPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</CoffeeTotal>
            </SelectedCoffeeContainer>            
          ))}

          <ListDivider />

          <SummaryInfo>
            <div>
              <span>Total de itens</span>
              <SummaryTotalPrice>{pricing.itemsTotalPriceFormated}</SummaryTotalPrice>
            </div>

            <div>
              <span>Entrega</span>
              <SummaryTotalPrice>{pricing.deliverPriceFormated}</SummaryTotalPrice>
            </div>

            <SummaryTotal>
              <span>Total</span>
              <span>{pricing.totalPriceFormated}</span>
            </SummaryTotal>
          </SummaryInfo>
          
          <ConfirmOrderButton>
            CONFIRMAR PEDIDO
          </ConfirmOrderButton>
        </SummaryContainer> 
      </aside>
    </CheckoutContainer>
  )
}
