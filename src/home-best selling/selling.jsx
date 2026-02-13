import React from "react";
import "./selling.css";

const products = [
    {
        id: 1,
        off: "22% OFF",
        img: `${import.meta.env.BASE_URL}offer1.webp`,
        title: "Acrobat Fungicide – Dimethomorph 50% WP",
        brand: "BASF",
        price: 663,
        old: 849,
        save: 186,
        size: "100 gms",
    },
    {
        id: 2,
        off: "48% OFF",
        img: `${import.meta.env.BASE_URL}offer2.webp`,
        title: "Katyayani NPK 19:19:19 – Water Soluble",
        brand: "Katyayani Organics",
        price: 343,
        old: 664,
        save: 321,
        size: "1 kg",
    },
    {
        id: 3,
        off: "61% OFF",
        img: `${import.meta.env.BASE_URL}offer3.webp`,
        title: "Geolife No-Virus – Improves Immunity",
        brand: "Geolife Agritech",
        price: 271,
        old: 700,
        save: 429,
        size: "250 ml",
    },
    {
        id: 4,
        off: "26% OFF",
        img: `${import.meta.env.BASE_URL}veg seeds.jpg`,
        title: "Simodis Insecticide – Broad Spectrum",
        brand: "Syngenta",
        price: 759,
        old: 1029,
        save: 270,
        size: "80 ml",
    },
];

function Selling() {
    return (
        <section className="offers">
            <div className="offers-head">
                <div>
                    <h2>Best Selling </h2>
                    <p>Best prices available today.</p>
                </div>

            </div>

            <div className="offer-list">
                {products.map((p) => (
                    <div className="card" key={p.id}>
                        <span className="off">{p.off}</span>
                        <span className="wish"></span>

                        <img src={p.img} alt={p.title} />

                        <h4>{p.title}</h4>
                        <p className="brand">{p.brand}</p>

                        <div className="price">
                            <span className="new">₹{p.price}</span>
                            <span className="old">₹{p.old}</span>
                        </div>

                        <p className="save">Save ₹ {p.save}</p>

                        <select>
                            <option>{p.size}</option>
                        </select>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Selling;
