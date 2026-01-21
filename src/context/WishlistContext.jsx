import { createContext, useState } from "react";
export const WishlistContext = createContext();

export const WishlistProvider = ({children}) =>{
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product)=>{
    const exist = wishlist.find(p => p.id===product.id);
    if(exist) setWishlist(wishlist.filter(p => p.id!==product.id));
    else setWishlist([...wishlist, product]);
  };

  return(
    <WishlistContext.Provider value={{wishlist, toggleWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
};
