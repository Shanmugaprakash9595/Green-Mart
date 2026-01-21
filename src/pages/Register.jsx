import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Register.css";


export default function Register(){
  const {register} = useContext(AuthContext);
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const nav = useNavigate();

  const handleReg = (e)=>{
    e.preventDefault();
    register(email,pass);
    nav("/");
  };

  return(
    <form className="form" onSubmit={handleReg}>
      <h2>Create Account</h2>
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
      <button>Register</button>
    </form>
  );
}
