import { useState } from "react"
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from "react-router-dom"

import "./TodoApp.css"
export default function TodoApp(){
    return (
        <div>
    <HeaderComponent/>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<LoginComponent/>}></Route>
                <Route path='/login' element={<LoginComponent/>}></Route>
                <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                <Route path="/todos" element={<ListTodoComponent/>}></Route>
                <Route path='*' element={<ErrorComponent/>}></Route>
            </Routes>
        </BrowserRouter>
<FooterComponent/>
        </div>
    )
}

function LoginComponent(){
   const [username,setUsername]= useState("lulu")
const [password,setPassword] = useState("")
const [showSuccess,setSuccess] = useState(false)

const [showError,setError] = useState(false)
const navigate = useNavigate()
const handleUsernameChange = (e)=>{
   
    setUsername(e.target.value)
   

}

const handlePasswordChange = (e)=>{

    setPassword(e.target.value)
   
}

const handleSubmit = ()=>{
    if (username === 'lulu' && password === 'dummy'){
        setSuccess(true)
        setError(false)
        navigate('/welcome/lulu')
    }else{
        setError(false)
        setSuccess(true)
      
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
              <h1>Todo Management</h1>
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
function ListTodoComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDate())
    const todos = [
        {id:1,description:'Learn AWS',done:false,targetDate:targetDate},
        {id:1,description:'Learn Full Stack Dev',done:false,targetDate:targetDate},
        {id:1,description:'Learn DevOps',done:false,targetDate:targetDate},
    ]
   
    return(
        <div className="list-component">
           <h1>Things you want to do</h1>
           <div>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                        </tr>
                </thead>
                <tbody>

                {todos.map(todo => (
    <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.description}</td>
        <td>{todo.done.toString()}</td>
        <td>{todo.targetDate.toDateString()}</td>
    </tr>
))}


                   
                </tbody>
            </table>
           </div>
        </div>
    )
}


function WelcomeComponent(){
    const {username} = useParams()
   
    return(
        <div className="welcomeComponent">
            <h1> Welcome {username}</h1>
            <div>
               Manage Your todos- <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}


function LogoutComponent(){
    return(
        <div className="logout-component">
        
      <h1>You are logged out</h1>
      <div>Thank you for using our app. Come back soon!</div>
        </div>
    )
}
function HeaderComponent(){
    return(
        <div className="header-component">
         Header <hr/>
        </div>
    )
}

function FooterComponent(){
    return(
        <div className="header-component">
        
        <hr/>
         Footer
        </div>
    )
}