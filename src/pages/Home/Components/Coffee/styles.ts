import styled from "styled-components"

export const CardContainer = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme['gray-200']};

  img {
    margin-top: -40px;
    margin-bottom: 12px;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-800']};
    margin-top: 16px;
    margin-bottom: 8px;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    margin-bottom: 33px;
  }
`

export const Badge = styled.div`
  padding: 4px 8px;
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: 700;
  color: ${(props) => props.theme['yellow-700']};
  background-color: ${(props) => props.theme['yellow-300']};
`

export const Footer = styled.div`
  width: 100%;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.div`
  span:nth-child(1) {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
    margin-right: 4px;
  }

  span:nth-child(2) {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const AmmountSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8.5px 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-400']};

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-900']};
    line-height: 130%;
  }

  svg {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-500']};
    cursor: pointer;
  }
`

export const AddCoffeeToCartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 0;
  border-radius: 6px;
  font-size: 1.375rem;

  cursor: pointer;
  background-color: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme.white};
`
