
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductModal from "./ProductModal";
import "./ProductCard.css";

export default function ProductCard({ data }) {
  const [open, setOpen] = useState(false);
  const { addToCart } = useContext(CartContext); // Only cart is used

  return (
    <div className="card">
      <p className="off">{data.off}</p>
      <img src={data.image} alt="" onClick={() => setOpen(true)} />
      <div className="gap">
        <h4>{data.name}</h4>
        <p className="brand">{data.brand}</p>
        <p className="price">
          ₹{data.price} <span>₹{data.mrp}</span>
        </p>
      </div>

      <div className="actions">
        <button className="cart-btn" onClick={() => addToCart(data)}>
           Add to Cart
        </button>
        <button className="view" onClick={() => setOpen(true)}>View</button>
      </div>

      {open && <ProductModal product={data} close={() => setOpen(false)} />}
    </div>
  );
}
