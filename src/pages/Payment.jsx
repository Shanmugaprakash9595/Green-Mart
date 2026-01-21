import { useNavigate } from "react-router-dom";
import "./Payment.css"
export default function Payment(){
  const nav = useNavigate();
  return(
    <div className="form">
      <h2>Payment Method</h2>
      <label><input type="radio" name="pay"/>UPI</label>
      <label><input type="radio" name="pay"/>Debit/Credit Card</label>
      <label><input type="radio" name="pay"/>Cash on Delivery</label>
      <button onClick={()=>nav("/order-success")}>Confirm Order</button>
    </div>
  );
}
