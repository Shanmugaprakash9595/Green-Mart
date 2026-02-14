import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductModal.css";

const base = import.meta.env.BASE_URL;

export default function ProductModal({ product, close }) {
  const { addToCart } = useContext(CartContext);
  const [size, setSize] = useState(product.sizes?.[0] ?? "Default");
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addToCart({ ...product, size, qty });
    close();
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <button className="close" type="button" onClick={close}>
          x
        </button>
        <img src={`${base}${product.image}`} alt={product.name} />
        <h3>{product.name}</h3>
        <h2>Rs {product.price}</h2>

        <select value={size} onChange={(e) => setSize(e.target.value)}>
          {(product.sizes ?? ["Default"]).map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <div className="qty">
          <button type="button" onClick={() => setQty(Math.max(1, qty - 1))}>
            -
          </button>
          <span>{qty}</span>
          <button type="button" onClick={() => setQty(qty + 1)}>
            +
          </button>
        </div>

        <button className="add" type="button" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
