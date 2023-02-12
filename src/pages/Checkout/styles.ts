import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  max-width: 1120px;
  margin: 40px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
`

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme['gray-800']};
  font-size: 1.125rem;
  font-weight: 700;
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
`

const ContainerBase = styled.div`
  padding: 40px;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};
`

export const AddressContainer = styled(ContainerBase)`
  margin-top: 15px;
`

export const PaymentContainer = styled(ContainerBase)`
  margin-top: 12px;
`

export const CardTitle = styled.p`
  color: ${(props) => props.theme['gray-800']};
  font-size: 1rem;
  line-height: 130%;
`

export const CardDescription = styled.p`
  color: ${(props) => props.theme['gray-700']};
  font-size: 0.875rem;
  line-height: 130%;
`

export const AddressHeader = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;

  svg {
    color: ${(props) => props.theme['yellow-700']}
  }
`

export const AddressInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  input {
    width: 100%;
    padding: 12px;
    border-radius: 4px;

    background-color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-400']};

    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const CEPContainer = styled.div`
  input {
    max-width: 200px;
  }
`

export const StreetContainer = styled.div`
  
`

export const MinorInfo = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  gap: 12px;
`

export const MajorInfo = styled.div`
  display: grid;
  grid-template-columns: 200px auto 60px;
  gap: 12px;
`

export const PaymentHeader = styled.div`
  display: flex;
  gap: 8px;

  svg {
    color: ${(props) => props.theme['purple-500']}
  }
`

export const PaymentOptions = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 12px;
`

interface PaymentButtonProps {
  isSelected: boolean
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 16px;
  border-radius: 6px;
  border: 1px solid;

  cursor: pointer;
  transition: .2s background-color, border-color;

  background-color: ${(props) => props.isSelected
    ? props.theme['purple-300']
    : props.theme['gray-400']
  };

  border-color: ${(props) => props.isSelected
    ? props.theme['purple-500']
    : props.theme['gray-400']
  };

  span {
    font-size: 0.75rem;
    line-height: 160%;
    color: ${(props) => props.theme['gray-700']}
  }

  svg {
    color: ${(props) => props.theme['purple-500']}
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
    border-color: ${(props) => props.theme['gray-500']};
  }
`

export const SummaryContainer = styled(ContainerBase)`
  margin-top: 15px;
  border-radius: 6px 44px 6px 44px;
  min-width: 448px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CoffeeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }

  p {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1rem;
    line-height: 130%;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`

export const RemoveCoffeeFromCartButton = styled.button`
  height: 38px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-400']};
  outline: none;
  border: none;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-700']};
    line-height: 130%;
  }

  svg {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-500']};
    cursor: pointer;
  }

  transition: .2s background-color;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }
`

export const CoffeeTotal = styled.span`
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['gray-700']};
`


export const ListDivider = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme['gray-400']};
`

export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  color: ${(props) => props.theme['gray-700']};
  font-size: 0.875rem;
  line-height: 130%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const SummaryTotalPrice = styled.span`
  font-size: 1rem;
`

export const SummaryTotal = styled.div`
  color: ${(props) => props.theme['gray-800']};
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 700;
`

export const ConfirmOrderButton = styled.button`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 8px;
  border: 0;
  border-radius: 6px;
  font-size: 0.875rem;

  cursor: pointer;
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};
`
