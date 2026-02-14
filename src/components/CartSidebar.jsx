import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./CartSidebar.css";

export default function CartSidebar() {
  const { cart, updateQty, removeCart, open, setOpen } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <aside className={`cart ${open ? "show" : ""}`}>
      <h3>Your Cart</h3>
      <button className="close" type="button" onClick={() => setOpen(false)}>
        x
      </button>

      {cart.length === 0 && <p className="empty">Your cart is empty.</p>}

      {cart.map((item) => (
        <div className="item" key={`${item.id}-${item.size}`}>
          <h4>{item.name}</h4>
          <p>
            {item.size} | Rs {item.price}
          </p>
          <div className="qty">
            <button type="button" onClick={() => updateQty(item.id, item.size, "dec")}>
              -
            </button>
            <span>{item.qty}</span>
            <button type="button" onClick={() => updateQty(item.id, item.size, "inc")}>
              +
            </button>
          </div>
          <button className="remove" type="button" onClick={() => removeCart(item.id, item.size)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: Rs {total}</h2>
      <Link to="/checkout">
        <button className="checkout" type="button" onClick={() => setOpen(false)}>
          Proceed to Checkout
        </button>
      </Link>
    </aside>
  );
}
