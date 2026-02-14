import "./cat.css";
import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const categories = [
  { title: "Vegetable Seeds", img: "veg-seeds.jpg", to: "/seeds" },
  { title: "Fruit Seeds", img: "fruit seeds.webp", to: "/seeds" },
  { title: "Organic Fertilizers", img: "Organic Fertilize.webp", to: "/fer" },
  { title: "Farm Machinery", img: "farm machinery.webp", to: "/mac" },
  { title: "Flower Seeds", img: "flower seed.webp", to: "/seeds" },
  { title: "Animal Husbandry", img: "ani.webp", to: "/ani" },
  { title: "Fungicides", img: "fun.webp", to: "/fun" },
  { title: "Plant Nutrition", img: "nun.webp", to: "/pla" },
  { title: "Insecticides", img: "ins.webp", to: "/in" },
  { title: "Equipments", img: "eq.webp", to: "/eq" },
];

function Categories() {
  return (
    <section className="category-section">
      <h2 className="title">Categories</h2>
      <hr className="line" />

      <div className="category-list">
        {categories.map((item) => (
          <Link className="category-card" key={item.title} to={item.to}>
            <img src={`${base}${item.img}`} alt={item.title} />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
