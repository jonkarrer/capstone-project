import React, {useContext, useState} from 'react';

const TotalContext = React.createContext();
const updateContext = React.createContext();
const subTotalContext = React.createContext();
interface TotalProps {
  children: any;
}
const shopCartItems: any = [];
export function useArr() {
  return useContext(TotalContext)
}
export function useSubTotal() {
  return useContext(subTotalContext)
}
export function updateSubTotal() {
  return useContext(updateContext)
}

export function TotalProvider({ children }:TotalProps) {

  const [subTotal, setSubTotal] = useState();
  const changeSubTotal = () => {
    setSubTotal(shopCartItems.reduce(function(a: number, b: { itemCost: number, itemCount: number }) { return a + b.itemCost * b.itemCount}, 0))
  }
  return (
    <TotalContext.Provider value={shopCartItems}>
      <subTotalContext.Provider value={subTotal}>
        <updateContext.Provider value={changeSubTotal}>
        {children}
        </updateContext.Provider>
      </subTotalContext.Provider>
    </TotalContext.Provider>
  )
}