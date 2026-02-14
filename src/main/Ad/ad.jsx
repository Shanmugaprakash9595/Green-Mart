import "./ad.css";

const base = import.meta.env.BASE_URL;
const banners = ["ad1.webp", "ad2.webp", "ad3.webp", "ad4.webp"];

function Ad() {
  return (
    <div className="ad">
      <h2 className="ad-title">Exclusive Offer</h2>
      <div className="add-img-sec">
        {banners.map((banner) => (
          <img key={banner} src={`${base}${banner}`} alt={banner} />
        ))}
      </div>
    </div>
  );
}

export default Ad;
