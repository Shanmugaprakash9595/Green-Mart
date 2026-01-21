import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";


import "./ProductModal.css";

export default function ProductModal({product,close}){
  const {addToCart} = useContext(CartContext);
  const [size,setSize] = useState(product.sizes[0]);
  const [qty,setQty]   = useState(1);

  const handleAdd = ()=>{
    addToCart({...product,size,qty});
    close();
  };
  

  return(
    <div className="modal-bg">
      <div className="modal-box">
        <button className="close" onClick={close}>✖</button>
        <img src={product.image} alt=""/>
        <h3>{product.name}</h3>
        <h2>₹{product.price}</h2>

        <select onChange={(e)=>setSize(e.target.value)}>
          {product.sizes.map(s => <option key={s}>{s}</option>)}
        </select>

        <div className="qty">
          <button onClick={()=>setQty(Math.max(1,qty-1))}>-</button>
          <span>{qty}</span>
          <button onClick={()=>setQty(qty+1)}>+</button>
        </div>

        <button className="add" onClick={handleAdd}>Add to Cart</button>
      </div>
    </div>
  );
}
