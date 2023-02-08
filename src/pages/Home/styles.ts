import styled from 'styled-components'

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
