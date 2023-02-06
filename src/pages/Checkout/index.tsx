import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
  TrashSimple,
} from 'phosphor-react'

import expresso from '../../assets/coffes/expresso.png'

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
  AmmountSelector,
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

export function Checkout() {
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
          <SelectedCoffeeContainer>
            <CoffeeInfo>
              <img src={expresso} alt="" />

              <div>
                <span>Expresso Tradicional</span>
                <Actions>
                  <AmmountSelector>
                    <Minus />
                    <span>1</span>
                    <Plus />
                  </AmmountSelector>
                  <RemoveCoffeeFromCartButton>
                    <Trash weight="fill" />
                    <span>REMOVER</span>
                  </RemoveCoffeeFromCartButton>
                </Actions>
              </div>
            </CoffeeInfo>

            <CoffeeTotal>R$ 19,80</CoffeeTotal>
          </SelectedCoffeeContainer>

          <ListDivider />

          <SummaryInfo>
            <div>
              <span>Total de itens</span>
              <SummaryTotalPrice>R$ 29,70</SummaryTotalPrice>
            </div>

            <div>
              <span>Entrega</span>
              <SummaryTotalPrice>R$ 3,50</SummaryTotalPrice>
            </div>

            <SummaryTotal>
              <span>Total</span>
              <span>R$ 33,20</span>
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
