import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import successIllustration from '../../assets/success_illustration.svg'
import {
  SuccessContainer,
  InfoContainer,
  InfoItem,
  InfoContainerGradientBorder,
  AddressIconContainer,
  PaymentIconContainer,
  TimeIconContainer,
} from './styles'
import { useLocation } from 'react-router-dom'

export function Success() {
  const { state } = useLocation()
  const { order } = state

  return (
    <>
      <SuccessContainer>
        <div>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <InfoContainerGradientBorder>
            <InfoContainer>
              <InfoItem>
                <AddressIconContainer>
                  <MapPin weight="fill" size={16} />
                </AddressIconContainer>
                <div>
                  <p>
                    Entrega em <strong>{order.address.rua}, {order.address.numero}</strong>
                  </p>
                  <p>{order.address.cidade} - {order.address.uf}</p>
                </div>
              </InfoItem>

              <InfoItem>
                <TimeIconContainer>
                  <Timer weight="fill" size={16} />
                </TimeIconContainer>
                <div>
                  <p>Previsão de entrega</p>
                  <p>
                    <strong>20 min - 30 min</strong>
                  </p>
                </div>
              </InfoItem>

              <InfoItem>
                <PaymentIconContainer>
                  <CurrencyDollar weight="fill" size={16} />
                </PaymentIconContainer>
                <div>
                  <p>Pagamento na entrega</p>
                  <p>
                    <strong>{order.paymentType}</strong>
                  </p>
                </div>
              </InfoItem>
            </InfoContainer>
          </InfoContainerGradientBorder>
        </div>

        <img
          src={successIllustration}
          alt="Ilustração de um motoboy levando o pedido para entregar"
        />
      </SuccessContainer>
    </>
  )
}
