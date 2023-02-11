import {
  Minus,
  Plus,
} from 'phosphor-react'

import {
  Container,
} from './styles'

interface AmountSelectorProps {
  coffeeQuantity: number
  onRaiseAmount: () => void
  onLowerAmount: () => void
}

export function AmountSelector({coffeeQuantity, onRaiseAmount, onLowerAmount}: AmountSelectorProps) {
  return (
    <Container>
      <Minus onClick={onLowerAmount} />
      <span>{coffeeQuantity}</span>
      <Plus onClick={onRaiseAmount} />
    </Container>
  )
}