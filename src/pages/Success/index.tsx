import { MapPin, Timer } from 'phosphor-react'

import successIllustration from '../../assets/success_illustration.svg'
import {
  SuccessContainer,
  InfoContainer,
  InfoItem,
  IconContainer,
} from './styles'

export function Success() {
  return (
    <>
      <SuccessContainer>
        <div>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <InfoContainer>
            <InfoItem>
              <IconContainer>
                <MapPin />
              </IconContainer>
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </InfoItem>

            <InfoItem>
              <IconContainer>
                <Timer />
              </IconContainer>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </InfoItem>

            <InfoItem>
              <IconContainer>
                <MapPin />
              </IconContainer>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </InfoItem>
          </InfoContainer>
        </div>

        <img
          src={successIllustration}
          alt="Ilustração de um motoboy levando o pedido para entregar"
        />
      </SuccessContainer>
    </>
  )
}
