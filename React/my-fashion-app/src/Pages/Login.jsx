import { useState } from "react";
function Login(){
    const [email,setEmail] = useState("")
    const [password ,setPassword] =useState("")

    function handleLogin(e){
        e.preventDefault()

        if (email === "" || password ===""){
            alert("Please fill alll fields")
        }
        else{
            alert('Login successfull')
        }
    }

    return(
        <div className="Login-page">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
           
       <input type="email" placeholder="Enter Email"
     value={email} onChange={(e) => setEmail(e.target.value)}/> 
     
     <input type="passwpord" placeholder="Enter password"
     value={password} onChange={(e) => setPassword(e.target.value)}/> 

      <button type="submit">Login </button>

        </form>
        </div>
    )
}
export default Login