import { useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import "./TodoApp.css"
export default function TodoApp(){
    return (
        <div>
        Todo Management
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<LoginComponent/>}></Route>
                <Route path='/login' element={<LoginComponent/>}></Route>
                <Route path='/welcome' element={<WelcomeComponent/>}></Route>
                <Route path='*' element={<ErrorComponent/>}></Route>
            </Routes>
        </BrowserRouter>

 <WelcomeComponent/>
        </div>
    )
}

function LoginComponent(){
   const [username,setUsername]= useState("lulu")
const [password,setPassword] = useState("")
const [showSuccess,setSuccess] = useState(false)

const [showError,setError] = useState(false)
const navigate = useNavigate
const handleUsernameChange = (e)=>{
   
    setUsername(e.target.value)
   

}

const handlePasswordChange = (e)=>{

    setPassword(e.target.value)
   
}

const handleSubmit = ()=>{
    if (username == 'lulu' && password == 'dummy'){
setSuccess(true)
setError(false)
    }else{
       setError(false)
       setSuccess(true)
       navigate('/welcome')
    }
}
function ShowSuccessComponent(){
    if(showSuccess){
        return    <div className="success">Autheticated successfully</div>
        
      
    }
    return null
}
function ShowErrorComponent(){
    if(showError){
        return    <div className="error">Authetication failed. Please check your credentials</div>
        
      
    }
    return null
}
    return(
        <div className='login'>
            {showSuccess  && <div className="success">Autheticated successfully</div>}
            {showError  && <div className="error">Authetication failed. Please check your credentials</div>}
           <ShowSuccessComponent/>
           <ShowErrorComponent/>
            <div className="login-form">
                <label >User Name</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
            </div>
            <div>
            <label >password</label>
                <input type="password" name="username" value={password} onChange={ handlePasswordChange}/>
            </div>
            <div>
<button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>
               
               
        </div>

    )
}

function ErrorComponent(){
    return(
        <div className="error-component">
           Error Component
        </div>
    )
}

function WelcomeComponent(){
    return(
        <div className="welcome">
            Welcome Lulu
        </div>
    )
}