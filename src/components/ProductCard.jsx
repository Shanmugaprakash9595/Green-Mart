import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductModal from "./ProductModal";
import "./ProductCard.css";

const base = import.meta.env.BASE_URL;

export default function ProductCard({ data }) {
  const [open, setOpen] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleQuickAdd = () => {
    addToCart({ ...data, qty: 1, size: data.sizes?.[0] ?? "Default" });
  };

  return (
    <article className="card">
      <p className="off">{data.off}</p>
      <img src={`${base}${data.image}`} alt={data.name} onClick={() => setOpen(true)} />

      <div className="gap">
        <h4>{data.name}</h4>
        <p className="brand">{data.brand}</p>
        <p className="price">
          Rs {data.price} <span>Rs {data.mrp}</span>
        </p>
      </div>

      <div className="actions">
        <button className="cart-btn" type="button" onClick={handleQuickAdd}>
          Add to Cart
        </button>
        <button className="view" type="button" onClick={() => setOpen(true)}>
          View
        </button>
      </div>

      {open && <ProductModal product={data} close={() => setOpen(false)} />}
    </article>
  );
}
