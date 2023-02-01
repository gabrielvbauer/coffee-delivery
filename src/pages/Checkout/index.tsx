import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  CheckoutContainer,
  AddressContainer,
  PaymentContainer,
  AddressHeader,
  AddressInputs,
  PaymentHeader,
  PaymentOptions,
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
      </aside>
    </CheckoutContainer>
  )
}
