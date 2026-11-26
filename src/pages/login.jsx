import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
      //const[email, setEmail] = useState("");
  //const[password, setPassword] = useState("");
  
const[formdata, setFormdata] = useState({
  username:"",
  password:""
})
function handleChange(e){
  e.preventDefault();

   setFormdata({...formdata,
      [e.target.name]:e.target.value
})}
const handleSubmit=(e)=>{
  e.preventDefault();
  alert("login success")
  console.log(formdata)
  navigate("/dashboard",{state:formdata})
 
}
    
    return(
        /* <div className="text-blue-500">HI </div>

        <input type="email" required placeholder="Enter your email" value={email} onChange={(param) => setEmail(param.target.value)} />
        <input type="password" required placeholder="Enter your password" value={password} onChange={(param) => setPassword(param.target.value)} />
        <button type="sumbit" onClick={()=>print()}>sumbit</button>} */
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" required placeholder="Enter your username" name={"username"} onChange={handleChange} /><br/>
        <label>Password</label>
        <input type="password" required placeholder="Enter your password" name={"password"} onChange={handleChange} /><br/>
        <button type="submit">submit</button>
      </form>)
} export default Login;