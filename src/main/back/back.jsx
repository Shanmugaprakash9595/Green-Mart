import { useEffect, useState } from "react";
import "./back.css";
const images = ["ag1.jpg", "ag2.jpg", "ag3.jpg",];

export default function Back() {
  const [index, setIndex] = useState(0);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="back-slider">
      <img
        key={index}
        className="back-image"
        src={`${base}${images[index]}`}
        alt={`agri-${index + 1}`}
      />

      <div className="back-overlay">
        <h2>Welcome to Greenmart</h2>
      </div>

      <div className="back-dots">
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            className={`back-dot ${dotIndex === index ? "active" : ""}`}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>
    </section>
  );
}
