import React from 'react'
import "./cat.css";
import { useNavigate } from 'react-router-dom';

const categories = [
  {title: "Vegetables Seeds",img: "/veg seeds.jpg",},
  {title: "Fruit Seeds", img: "/fruit seeds.webp",},
  {title: "Organic Fertilizers", img: "/Organic Fertilize.webp",},
  {title: "Farm Machinery", img: "/farm machinery.webp",},
  {title: "Flowers Seeds", img: "/flower seed.webp",},
  {title: "Animal Husbandry",img: "/ani.webp",},
  {title: "Fungicides",img: "/fun.webp",},
  {title: "Plant Nutrition",img: "/nun.webp",},
  {title: "Insecticides & Pesticides",img: "/ins.webp",},
  {title: "Equipments",img: "/eq.webp",}];
  

function Categories() {


  return (
    <div className="category-section">
      <h2 className="title">Categories</h2>
    
<hr class="line" />


      <div className="category-list">
        {categories.map((item, index) => (
          <div
            className="category-card"
            key={index}
          >
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Categories;



