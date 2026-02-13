import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import "./CartSidebar.css";

export default function CartSidebar(){
  const {cart,updateQty,removeCart,open,setOpen} = useContext(CartContext);
  const total = cart.reduce((t,i)=>t+i.qty*i.price,0);

  return(
    <div className={`cart ${open?"show":""}`}>
      <h3>Your Cart</h3>
      <button className="close" onClick={()=>setOpen(false)}>✖</button>

      {cart.map(item=>(
        <div className="item" key={item.id+item.size}>
          <h4>{item.name}</h4>
          <p>{item.size} • ₹{item.price}</p>
          <div className="qty">
            <button onClick={()=>updateQty(item.id,item.size,"dec")}>-</button>
            <span>{item.qty}</span>
            <button onClick={()=>updateQty(item.id,item.size,"inc")}>+</button>
          </div>
          <button className="remove" onClick={()=>removeCart(item.id,item.size)}>Remove</button>
        </div>
      ))}


      <h2>Total: ₹{total}</h2>
      <Link to="/checkout">
        <button className="checkout"onClick={()=>setOpen(false)}>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

