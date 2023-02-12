import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 0;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 12px;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 8px;
  border-radius: 6px;
  font-size: 0.875rem;

  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-700']};
`

export const ShoppingCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 8px;
  border: 0;
  border-radius: 6px;
  font-size: 0.875rem;

  cursor: pointer;
  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
`

export const QuantityIndicator = styled.div`
  position: absolute;
  top: -25%;
  right: -25%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme['yellow-700']};
  color: ${(props) => props.theme.white};
`