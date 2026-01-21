import React from "react";
import "./offer.css";

const products = [
    {
        id: 1,
        off: "22% OFF",
        img: "offer1.webp",
        title: "Acrobat Fungicide - Dimethomorph 50% WP",
        brand: "BASF",
        price: 663,
        old: 849,
        save: 186,
        size: "100 gms",
    },
    {
        id: 2,
        off: "48% OFF",
        img: "offer2.webp",
        title: "Katyayani NPK 19:19:19 - Water Soluble",
        brand: "Katyayani Organics",
        price: 343,
        old: 664,
        save: 321,
        size: "1 kg",
    },
    {
        id: 3,
        off: "61% OFF",
        img: "offer3.webp",
        title: "Geolife No-Virus - Improves Immunity",
        brand: "Geolife Agritech",
        price: 271,
        old: 700,
        save: 429,
        size: "250 ml",
    },
    {
        id: 4,
        off: "26% OFF",
        img: "veg seeds.jpg",
        title: "Simodis Insecticide - Broad Spectrum",
        brand: "Syngenta",
        price: 759,
        old: 1029,
        save: 270,
        size: "80 ml",
    },
];

function Offer() {
    return (
        <section className="offers">
            <div className="offers-head">
                <div>
                    <h2>Today’s Offer </h2>
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

export default Offer;

// import React, { useState } from "react";
// import "./offer.css";
// import ProductModal from "./ProductModal";

// const products = [
//   {
//     id: 1,
//     off: "22% OFF",
//     img: "offer1.webp",
//     title: "Acrobat Fungicide – Dimethomorph 50% WP",
//     brand: "BASF",
//     price: 663,
//     old: 849,
//     save: 186,
//     sizes: [
//       { size: "100 gms", price: 663, old: 849, save: 186, off: "22% OFF" },
//       { size: "200 gms", price: 1052, old: 1568, save: 516, off: "33% OFF" },
//       { size: "1 kg", price: 5652, old: 7291, save: 1639, off: "22% OFF", stock: false },
//       { size: "400 g", price: 2095, old: 3136, save: 1041, off: "33% OFF" }
//     ]
//   }
// ];

// function Offer() {
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleOpen = (prod) => {
//     setSelectedProduct(prod);
//     setOpenModal(true);
//   };

//   return (
//     <section className="offers">
//       <div className="offer-list">
//         {products.map((p) => (
//           <div className="card" key={p.id} onClick={() => handleOpen(p)}>
//             <span className="off">{p.off}</span>
//             <img src={p.img} alt={p.title} />
//             <h4>{p.title}</h4>
//             <p>{p.brand}</p>
//             <p>₹{p.price} <span className="oldp">₹{p.old}</span></p>
//           </div>
//         ))}
//       </div>

//       {openModal && (
//         <ProductModal product={selectedProduct} close={() => setOpenModal(false)} />
//       )}
//     </section>
//   );
// }

// export default Offer;
