import "./brand.css";

const base = import.meta.env.BASE_URL;
const logos = [
  "Balwaan.webp",
  "geolife-brand-logo.webp",
  "tapasLogo.webp",
  "vnrLogo.webp",
  "uplLogo.webp",
  "ecowealthLogo.webp",
  "seminisLogo.webp",
  "syngentaLogo.webp",
];

function Brand() {
  return (
    <div className="brands">
      <h2 className="brands-title">Brands</h2>

      <div className="sliderss">
        <div className="slide-track">
          {[...logos, ...logos].map((logo, idx) => (
            <img key={`${logo}-${idx}`} src={`${base}${logo}`} alt={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;
