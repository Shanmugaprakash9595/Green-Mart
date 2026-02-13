// import "./App.css";
// import Categories from "./main/Categories/cat";
// import Count from "./main/count/count";
// import Footer from "./main/footer/footer"
// import Brand from "./main/brands/brand";
// import Articles from "./main/articles/articles";
// import Icon1 from "./main/icon1/icon1";
// import Icon2 from "./main/icon2/icon2";
// import Ad from "./main/Ad/ad";

// import { Routes, Route } from "react-router-dom";
// import { CartProvider } from "./context/CartContext";
// import { AuthProvider } from "./context/AuthContext";

// import Navbar from "./components/Navbar";
// import CartSidebar from "./components/CartSidebar";


// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Checkout from "./pages/Checkout";
// import Payment from "./pages/Payment";
// import OrderSuccess from "./pages/OrderSuccess";


// // import Seeds from "./Categories/seeds/seeds"
// // import Home from "./home/Home";
// // import Header from "./header/header";
// // import Product from "./product/product";
// // import Offer from "./home-offer/offer";
// // import Selling from "./home-best selling/selling";



// function App() {
//   return (





//       <AuthProvider>
//         <CartProvider>
//           {/* <Header /> */}
//           {/* <Home /> */}
//           {/* <Offer /> */}
//           {/* <Selling /> */}

//           <Navbar />
//           <Count />
//           <Categories />
//           <Icon2 />
//           <Articles />
//           <Icon1 />
//           <Ad />
//           <Brand />







//           {/* Routes */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             {/* <Route path="/Seeds" element={<Seeds />} /> */}

//             <Route path="/checkout"
//               element={

//                   <Checkout />

//               }
//             />

//             <Route
//               path="/payment"
//               element={

//                   <Payment />

//               }
//             />

//             <Route
//               path="/order-success"
//               element={

//                   <OrderSuccess />

//               }
//             />

//           </Routes>

//           <CartSidebar />
//                 < Footer />

//         </CartProvider>
//       </AuthProvider>





//   );
// }

// export default App;




import "./App.css";

/* Home page sections */
import Categories from "./main/Categories/cat";
import Count from "./main/count/count";
import Brand from "./main/brands/brand";
import Articles from "./main/articles/articles";
import Icon1 from "./main/icon1/icon1";
import Icon2 from "./main/icon2/icon2";
import Ad from "./main/Ad/ad";
import Footer from "./main/footer/footer";

/* React Router */
import { Routes, Route, useLocation } from "react-router-dom";

/* Context */
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

/* Common Components */
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";

/* Pages */
import Home from "./pages/Home";
import Over from "./pages/over";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";

// import  Product from "./product/product"



// function App() {
//   const location = useLocation();
//   // const isHome = location.pathname === "/";
//   const isHome =
//     location.pathname === "/" ||
//     location.pathname === "/Green-Mart/";


//   return (
//     <AuthProvider>
//       <CartProvider>

//         {/* NAVBAR – ALL PAGES */}
//         <Navbar />

//         {/* HOME PAGE CONTENT ONLY */}
//         {isHome && (
//           <>
//             <Count />
//             <Categories />
//             <Icon2 />
//             <Home />
//             <Articles />
//             <Icon1 />
//             <Ad />
//             <Brand />
//             <Home />

//           </>
//         )}

//         {/* ROUTES */}
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Count />
//                 <Categories />
//                 <Icon2 />
//                 <Home />
//                 <Articles />
//                 <Icon1 />
//                 <Ad />
//                 <Brand />
//               </>
//             }
//           />

//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/order-success" element={<OrderSuccess />} />
//           <Route path="/seeds" element={<Over />} />
//           <Route path="fer" element={<Over />} />
//           <Route path="pla" element={<Over />} />
//           <Route path="fun" element={<Over />} />
//           <Route path="in" element={<Over />} />
//           <Route path="ani" element={<Over />} />
//           <Route path="mac" element={<Over />} />
//           <Route path="eq" element={<Over />} />
//           {/* <Route path="/see" element={<Product />} /> */}



//         </Routes>

//         {/* CART SIDEBAR – ALL PAGES */}
//         <CartSidebar />

//         {/* FOOTER – ALL PAGES */}
//         <Footer />

//       </CartProvider>
//     </AuthProvider>
//   );
// }

// export default App;



function App() {
  return (
    <AuthProvider>
      <CartProvider>

        <Navbar />

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Count />
                <Categories />
                <Icon2 />
                <Home />
                <Articles />
                <Icon1 />
                <Ad />
                <Brand />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          <Route path="/seeds" element={<Over />} />
          <Route path="/fer" element={<Over />} />
          <Route path="/pla" element={<Over />} />
          <Route path="/fun" element={<Over />} />
          <Route path="/in" element={<Over />} />
          <Route path="/ani" element={<Over />} />
          <Route path="/mac" element={<Over />} />
          <Route path="/eq" element={<Over />} />

        </Routes>

        <CartSidebar />
        <Footer />

      </CartProvider>
    </AuthProvider>
  );
}
export default App;