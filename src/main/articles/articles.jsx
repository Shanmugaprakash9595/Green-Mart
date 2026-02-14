import "./articles.css";

const base = import.meta.env.BASE_URL;
const articleImages = ["art1.webp", "art2.webp", "art3.webp", "art4.webp"];

function Articles() {
  return (
    <div className="art">
      <h2 className="article-title">Articles</h2>
      <div className="article-track">
        {[...articleImages, ...articleImages].map((image, idx) => (
          <img key={`${image}-${idx}`} src={`${base}${image}`} alt={image} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
