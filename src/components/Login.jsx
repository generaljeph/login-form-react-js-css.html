import { useState } from "react"
import { redirect } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleLogin =() =>{
        const userName = "Admin"
        const pwd = "12345"
        if(email === userName && pwd === password)

        {
           navigate('/home')
          
        }
        else{
            alert("worng email or password")
        }
        if(email === userName && pwd === password){
          alert("successfull")
       }
    
        
        
    }
    return(
        
        <div className="form">
            <label>userName</label>
            <input type="text" 
            placeholder="enter ur email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
            <br/><br/>
            <label>password</label>
            <input type="text" 
            placeholder="enter ur pdddddd"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            
            />
              <br/>
            <button onClick={handleLogin}>LOGIN</button>
          


        </div>
        
    )
}
export default Login