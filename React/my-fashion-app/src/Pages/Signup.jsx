import { useState } from "react";
function Signup(){
   const [name ,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password ,setPassword] =useState("")

    function handleSignup(e){
        e.preventDefault()

        if (name === "" || email ==="" || password === ""){
            alert("Please fill all fields")
        }
        else{
            alert('Account created successfully')
        }
    }

    return(
        <div className="signup-page">
            <h1>Create Account</h1>

    <form onSubmit={handleSignup}>


      <input type="text" placeholder="Enter Name"
     value={name} onChange={(e) => setName(e.target.value)}/> 
    

       <input type="email" placeholder="Enter Email"
     value={email} onChange={(e) => setEmail(e.target.value)}/> 
     
     <input type="passwpord" placeholder="Enter password"
     value={password} onChange={(e) => setPassword(e.target.value)}/> 

      <button type="submit">Signup</button>

        </form>

        </div>
    )

}
export default Signup