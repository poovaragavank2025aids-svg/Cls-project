import { useNavigate } from "react-router-dom";
import {Registerschema} from "../components/registerschema"
import { useForm } from "react-hook-form";     
import { zodResolver } from "@hookform/resolvers/zod";
function Register() {
     
        const navigate = useNavigate();
        const { register,handleSubmit,formState:{errors}}=useForm({
            resolver:zodResolver(Registerschema)

        })
        function onsubmit1(data){
            console.log(data)
            alert("register success")
            navigate("/login")
        }
        return ( 
            <>
            <form onSubmit={handleSubmit(onsubmit1)}>
                <label>Username</label><br/>
                <input type="text" placeholder="Enter name"  {...register("name")}/><br/><br/>
                <p>{errors.name?.message}</p>
                <input type="email" placeholder="Enter email"  {...register("email")}/><br/><br/>
                <p>{errors.email?.message}</p>
                <input type="password" placeholder="Enter password" {...register("password")} /><br/><br/>
                <p>{errors.password?.message}</p>
                <input type="number" {...register("age", { valueAsNumber: true })} />
                <p>{errors.age?.message}</p>
                <button type="submit">Submit</button>
            </form>
            </>
    );
}

export default Register;