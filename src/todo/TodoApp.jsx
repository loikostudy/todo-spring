import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom"
import ErrorComponent from "./ErrorComponent"
import HeaderComponent from "./HeaderComponent"
import ListTodoComponent from "./ListTodoComponent"
import LoginComponent from "./LoginComponent"
import LogoutComponent from "./LogoutComponent"
import "./TodoApp.css"
export default function TodoApp(){
    return (
        <>
   
        <BrowserRouter>
        <HeaderComponent/>
            <Routes>
            <Route path='/' element={<LoginComponent/>}></Route>
                <Route path='/login' element={<LoginComponent/>}></Route>
                <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                <Route path="/todos" element={<ListTodoComponent/>}></Route>
                <Route path='/logout' element={<LogoutComponent/>}></Route>
                <Route path="*" element={<ErrorComponent/>}></Route>
            </Routes>
            
        </BrowserRouter>

</>
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



