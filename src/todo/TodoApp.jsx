import { useState } from "react"
import "./TodoApp.css"
export default function TodoApp(){
    return (
        <div>
        Todo Management
<LoginComponent/>
{/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent(){
   const [username,setUsername]= useState("lulu")
const [password,setPassword] = useState("")
const handleUsernameChange = (e)=>{
    console.log(e.target.value)
    setUsername(e.target.value)
   

}

const handlePasswordChange = (e)=>{

    setPassword(e.target.value)
   
}
    return(
        <div className='login'>
            <div className="login-form">
                <label >User Name</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
            </div>
            <div>
            <label >password</label>
                <input type="password" name="username" value={password} onChange={ handlePasswordChange}/>
            </div>
            <div>
<button type="button" name="login">Login</button>
            </div>
               
               
        </div>

    )
}

function WelcomeComponent(){
    return(
        <div className="welcome">
            Welcome Component
        </div>
    )
}