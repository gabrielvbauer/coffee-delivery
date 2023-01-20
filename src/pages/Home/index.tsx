import { HeaderContainer, LocationButton, ShoppingCartButton } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Home() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <LocationButton>
          <MapPin />
          Porto Alegre, RS
        </LocationButton>
        <ShoppingCartButton>
          <ShoppingCart />
        </ShoppingCartButton>
      </nav>
    </HeaderContainer>
  )
}
