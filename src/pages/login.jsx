import { useState } from "react";
function Login(){
      const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const handleSubmit=(Event)=>Event.preventDefault();

    console.log(email,password)
    return(
        /* <div className="text-blue-500">HI </div>

        <input type="email" required placeholder="Enter your email" value={email} onChange={(param) => setEmail(param.target.value)} />
        <input type="password" required placeholder="Enter your password" value={password} onChange={(param) => setPassword(param.target.value)} />
        <button type="sumbit" onClick={()=>print()}>sumbit</button>} */
      <form onSubmit={handleSubmit}>
        <input type="email" required placeholder="Enter your email" value={email} onChange={(param) => setEmail(param.target.value)} /> <br/>
        <input type="password" required placeholder="Enter your password" value={password} onChange={(param) => setPassword(param.target.value)} />
        <button type="submit" onClick={()=>console.log(email,password)}>submit</button>
      </form>)
} export default Login;