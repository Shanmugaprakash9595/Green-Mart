import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  const addToCart = (item)=>{
    const normalizedItem = {
      ...item,
      qty: item.qty ?? 1,
      size: item.size ?? item.sizes?.[0] ?? "Default",
    };

    const found = cart.find(
      (p) => p.id === normalizedItem.id && p.size === normalizedItem.size
    );

    if (found) {
      found.qty += normalizedItem.qty;
      setCart([...cart]);
    } else {
      setCart([...cart, normalizedItem]);
    }

    setOpen(true);
  };
  const updateQty = (item,size,type)=>{
    setCart(cart.map(i=> i.id===item && i.size===size 
      ? {...i, qty: type==="inc"?i.qty+1:Math.max(i.qty-1,1)} : i ));
  };
  const removeCart = (id,size)=>{
    setCart(cart.filter(i => !(i.id===id && i.size===size)));
  };

  return(
    <CartContext.Provider value={{cart, addToCart, removeCart, updateQty, open, setOpen}}>
      {children}
    </CartContext.Provider>
  );
};
