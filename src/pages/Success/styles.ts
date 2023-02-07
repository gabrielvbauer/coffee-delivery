import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 1120px;
  margin: 80px auto 0 auto;

  display: flex;
  align-items: flex-end;

  h2 {
    color: ${(props) => props.theme['yellow-700']};
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }

  img {
    margin: 0 auto;
  }
`

export const InfoContainerGradientBorder = styled.div`
  margin-top: 40px;
  padding: 1px;
  border-radius: 6px 36px 6px 36px;

  background-image: linear-gradient(150deg, #dbac2c, #8047f8);
`

export const InfoContainer = styled.div`
  overflow: hidden;
  border-radius: 6px 36px 6px 36px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  background: ${(props) => props.theme['gray-100']};
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-700']};
    line-height: 130%;
  }

  svg {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const AddressIconContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme['purple-500']};
`

export const TimeIconContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme['yellow-500']};
`

export const PaymentIconContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme['yellow-700']};
`
