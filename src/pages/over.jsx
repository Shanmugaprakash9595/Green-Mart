import products from "../data/overall";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Over(){
  return(
    <div className="home">
      <h2>Best Products</h2>
      <p className="roll"> Best Price Available Today</p>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} data={p}/>)}
      </div>
    </div>
  );
}