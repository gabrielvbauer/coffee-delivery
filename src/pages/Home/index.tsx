import { HeaderContainer, Location, ShoppingCartButton } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Home() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <Location>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </Location>
        <ShoppingCartButton>
          <ShoppingCart weight="fill" size={22} />
        </ShoppingCartButton>
      </nav>
    </HeaderContainer>
  )
}
