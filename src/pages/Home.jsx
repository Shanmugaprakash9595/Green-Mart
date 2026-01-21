import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home(){
  return(
    <div className="home">
      <h2> Offer's Today</h2>
      <p className="roll"> Best Price Available Today</p>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} data={p}/>)}
      </div>
    </div>
  );
}
