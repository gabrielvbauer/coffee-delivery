import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 160px 32px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 12px;
  }
`

export const LocationButton = styled.button`
  background-color: ${(props) => props.theme['purple-300']};
`

export const ShoppingCartButton = styled.button`
  background-color: ${(props) => props.theme['yellow-300']};
`
