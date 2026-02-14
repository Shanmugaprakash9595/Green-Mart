import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home({ searchQuery = "" }) {
  const query = searchQuery.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    if (!query) return true;

    return (
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    );
  });

  return (
    <div className="home">
      <h2>Offer's Today</h2>
      <p className="roll">Best Price Available Today</p>

      {filteredProducts.length === 0 ? (
        <p className="roll">No products found for "{searchQuery}".</p>
      ) : (
        <div className="grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} data={p} />
          ))}
        </div>
      )}
    </div>
  );
}
