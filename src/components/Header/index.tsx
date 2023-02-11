import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, Location, ShoppingCartButton } from './styles'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  const {itemList} = useContext(ShoppingCartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <Location>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </Location>
        {itemList.length > 0 && (
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCartButton>
              <ShoppingCart weight="fill" size={22} />
            </ShoppingCartButton>
          </NavLink>
        )}
      </nav>
    </HeaderContainer>
  )
}
