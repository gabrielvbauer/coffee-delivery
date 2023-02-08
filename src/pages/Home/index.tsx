import { Introduction } from './Components/Introduction'
import { Coffee } from './Components/Coffee'

import {
  OurCoffeeContainer,
  CoffeeListContainer,
} from './styles'

export function Home() {
  return (
    <>
      <Introduction />
      <OurCoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeListContainer>
          <Coffee />
          <Coffee />
          <Coffee />
          <Coffee />
        </CoffeeListContainer>
      </OurCoffeeContainer>
    </>
  )
}
