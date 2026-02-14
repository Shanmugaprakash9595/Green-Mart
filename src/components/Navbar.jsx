import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Seeds", to: "/seeds" },
  { label: "Fertilizers", to: "/fer" },
  { label: "Plant Nutrition", to: "/pla" },
  { label: "Fungicides", to: "/fun" },
  { label: "Insecticides", to: "/in" },
  { label: "Animal Husbandry", to: "/ani" },
  { label: "Machinery", to: "/mac" },
  { label: "Equipments", to: "/eq" },
];

export default function Navbar({ searchQuery, setSearchQuery }) {
  const { cart, setOpen } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const visibleItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return navItems;
    return navItems.filter((item) => item.label.toLowerCase().includes(query));
  }, [searchQuery]);

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <Link className="logo" to="/">
          Green Mart
        </Link>

        <input
          className="search"
          placeholder="Search product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="right">
          {user ? (
            <button className="text-btn" type="button" onClick={logout}>
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}

          <button className="text-btn cart-count" type="button" onClick={() => setOpen(true)}>
            Cart ({cart.length})
          </button>
        </div>
      </nav>

      <div className="items">
        <ul>
          {visibleItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
