import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login(){
  const {login} = useContext(AuthContext);
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const nav = useNavigate();

  const handleLogin = (e)=>{
    e.preventDefault();
    login(email,pass);
    nav("/");
  };

  return(
    <form onSubmit={handleLogin} className="form">
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
      <input placeholder="Password" type="password" onChange={(e)=>setPass(e.target.value)}/>
      <button>Login</button>
      <Link to="/register">Create Account</Link>
    </form>
  );
}
