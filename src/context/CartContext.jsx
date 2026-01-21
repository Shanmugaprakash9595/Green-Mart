import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  const addToCart = (item)=>{
    const found = cart.find(p => p.id===item.id && p.size===item.size);
    if(found){ found.qty += item.qty; setCart([...cart]); }
    else setCart([...cart, item]);
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
