
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar(){
  const { cart, setOpen } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  return(
    <nav className="nav">
      <div className="logo">Green Mart</div>

      <input 
        className="search" 
        placeholder="Search..."
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="right">
        {user ? (
          <span onClick={logout} style={{cursor:"pointer"}}>👤 Logout</span>
        ) : (
          <Link to="/login"><i class="fa-solid fa-user"></i> Login</Link>
        )}


    

        <span onClick={()=>setOpen(true)} style={{cursor:"pointer"}}>
           <i class="fa-solid fa-cart-shopping"></i> {cart.length}
        </span>
        <div className="items">
          <nav>
            <ul>
               <li> <Link to="/">Home</Link></li>
              <li><Link to ="seeds">Seeds</Link></li>
              <li>< Link to ="fer">Fertilizers</Link></li>
              <li>< Link to ="pla">Plant Nutrition</Link></li>
              <li>< Link to ="fun">Fungicides</Link></li>
              <li>< Link to ="in">Insecticides & Pesticides</Link></li>
              <li>< Link to ="ani">Animal Husbandry</Link></li>
              <li>< Link to ="mac">Farm Machinery</Link></li>
              <li>< Link to ="eq">Equipments</Link></li>

            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
