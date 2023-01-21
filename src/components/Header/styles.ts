import styled from 'styled-components'

export const HeaderContainer = styled.header`
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

  padding: 8px;
  border: 0;
  border-radius: 6px;
  font-size: 0.875rem;

  cursor: pointer;
  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
`
