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
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <main>
        <h2>Complete o seu pedido</h2>

        <AddressContainer>
          <AddressHeader>
            <MapPinLine />
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </AddressHeader>

          <AddressInputs>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Opcional" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </AddressInputs>
        </AddressContainer>

        <PaymentContainer>
          <PaymentHeader>
            <CurrencyDollar />
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </PaymentHeader>

          <PaymentOptions>
            <span>
              <CreditCard />
              <p>CARTÃO DE CRÉDITO</p>
            </span>

            <span>
              <Bank />
              <p>CARTÃO DE DÉBITO</p>
            </span>

            <span>
              <Money />
              <p>CARTÃO DE DINHEIRO</p>
            </span>
          </PaymentOptions>
        </PaymentContainer>
      </main>
      <aside>
        <h2>Cafés selecionados</h2>
        
        <SummaryContainer>
          <SelectedCoffeeContainer>
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

            <span>R$ 19,80</span>
          </SelectedCoffeeContainer>

          <ListDivider />

          <SummaryInfo>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </SummaryInfo>
          
          <ConfirmOrderButton>
            CONFIRMAR PEDIDO
          </ConfirmOrderButton>
        </SummaryContainer> 
      </aside>
    </CheckoutContainer>
  )
}
