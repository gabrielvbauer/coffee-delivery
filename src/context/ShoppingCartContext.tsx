import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/Components/Coffee";

export interface ShoppingCartItem {
  coffee: Coffee
  quantity: number
  totalPrice: number
}

interface ShoppingCartContext {
  itemList: ShoppingCartItem[]
  addItemToCart: (coffee: Coffee, quantity: number) => void
  removeItemFromCart: (coffeeId: string) => void
  raiseItemQuantity: (coffeeId: string) => void
  lowerItemQuantity: (coffeeId: string) => void
  emptyItemList: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({children}: ShoppingCartContextProviderProps) {
  const [itemList, setItemList] = useState<ShoppingCartItem[]>(() => {
    const itemListFromLocalStorage = localStorage.getItem('@coffee-delivery_item-list')

    if (!itemListFromLocalStorage) return []

    return JSON.parse(itemListFromLocalStorage)
  })

  function raiseItemQuantity(coffeeId: string) {
    const newItemList = [...itemList]
    let coffeeItem = newItemList.find((item) => item.coffee.id === coffeeId)

    if (!coffeeItem) return

    coffeeItem.quantity += 1
    coffeeItem.totalPrice = coffeeItem.coffee.price * coffeeItem.quantity

    setItemList(newItemList)
  }

  function lowerItemQuantity(coffeeId: string) {
    const newItemList = [...itemList]
    let coffeeItem = newItemList.find((item) => item.coffee.id === coffeeId)

    if (!coffeeItem) return

    coffeeItem.quantity -= 1
    coffeeItem.totalPrice = coffeeItem.coffee.price * coffeeItem.quantity

    if (coffeeItem.quantity < 1) {
      coffeeItem.quantity = 1
      coffeeItem.totalPrice = coffeeItem.coffee.price * coffeeItem.quantity
    }

    setItemList(newItemList)
  }

  function addItemToCart(coffee: Coffee, quantity: number) {
    const totalPrice = coffee.price * quantity

    const newItem: ShoppingCartItem = {
      coffee,
      quantity,
      totalPrice
    }

    setItemList((previousState) => [...previousState, newItem])
    localStorage.setItem('@coffee-delivery_item-list', JSON.stringify([...itemList, newItem]))
  }

  function removeItemFromCart(coffeeId: string) {
    const _itemList = [...itemList]
    const cartWithoutItemToRemove = _itemList.filter((item) => item.coffee.id !== coffeeId)

    if (!cartWithoutItemToRemove) return

    setItemList(cartWithoutItemToRemove)
    localStorage.setItem('@coffee-delivery_item-list', JSON.stringify(cartWithoutItemToRemove))
  }

  function emptyItemList() {
    setItemList([])
    localStorage.removeItem('@coffee-delivery_item-list')
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        itemList,
        addItemToCart,
        removeItemFromCart,
        raiseItemQuantity,
        lowerItemQuantity,
        emptyItemList
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}