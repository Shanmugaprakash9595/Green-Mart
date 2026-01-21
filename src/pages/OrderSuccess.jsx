import { Link } from "react-router-dom";
import "./Order.css"
export default function OrderSuccess(){
  return(
    <div className="success">
      <h1>🎉 Order Placed Successfully!</h1>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}
