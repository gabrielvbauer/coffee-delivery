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
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-items: center;

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
  grid-template-columns: auto auto;
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

export const OurCoffeeContainer = styled.section`
  max-width: 1120px;
  margin: 32px auto 0 auto;
  padding-bottom: 157px;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const CoffeeListContainer = styled.div`
  margin-top: 54px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 40px;
`

export const CoffeeCard = styled.div`
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

export const CoffeeCardFooter = styled.div`
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
