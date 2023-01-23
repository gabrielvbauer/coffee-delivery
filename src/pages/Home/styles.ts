import styled from 'styled-components'
import Background from '../../assets/background.png'

export const IntroContainerBackground = styled.section`
  height: 544px;

  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const IntroContainer = styled.main`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: center;

  > div {
    h1 {
      font-size: 3rem;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      line-height: 130%;
      color: ${(props) => props.theme['gray-900']};
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['gray-800']};
    }
  }

  > img {
    margin-left: 56px;
  }
`

export const ItemsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 40px;
  row-gap: 20px;
  margin-top: 66px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const ItemIconBase = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1rem;
  }
`

export const ShoppingItem = styled(ItemIconBase)`
  background-color: ${(props) => props.theme['yellow-700']};
`

export const PackageItem = styled(ItemIconBase)`
  background-color: ${(props) => props.theme['gray-700']};
`

export const ShippingItem = styled(ItemIconBase)`
  background-color: ${(props) => props.theme['yellow-500']};
`

export const CoffeeItem = styled(ItemIconBase)`
  background-color: ${(props) => props.theme['purple-500']};
`
