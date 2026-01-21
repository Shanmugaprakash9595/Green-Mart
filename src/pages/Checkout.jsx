import { useNavigate } from "react-router-dom";
import "./Checkout.css";
export default function Checkout(){
  const nav = useNavigate();
  return(
    <div className="form">
      <h2>Delivery Address</h2>
      <input placeholder="Full Name"/>
      <input placeholder="Mobile"/>
      <input placeholder="Address"/>
      <button onClick={()=>nav("/payment")}>Continue to Payment</button>
    </div>
  );
}

