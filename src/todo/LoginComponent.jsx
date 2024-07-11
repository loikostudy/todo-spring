import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
    const [username, setUsername] = useState("lulu");
    const [password, setPassword] = useState("");
    const [showSuccess, setSuccess] = useState(false);

    const [showError, setError] = useState(false);
    const navigate = useNavigate();
    const handleUsernameChange = (e) => {

        setUsername(e.target.value);


    };

    const handlePasswordChange = (e) => {

        setPassword(e.target.value);

    };

    const handleSubmit = () => {
        if (username === 'lulu' && password === 'dummy') {
            setSuccess(true);
            setError(false);
            navigate('/welcome/lulu');
        } else {
            setError(false);
            setSuccess(true);

        }
    };
    function ShowSuccessComponent() {
        if (showSuccess) {
            return <div className="success">Autheticated successfully</div>;


        }
        return null;
    }
    function ShowErrorComponent() {
        if (showError) {
            return <div className="error">Authetication failed. Please check your credentials</div>;


        }
        return null;
    }
    return (
        <div className='login'>
            <h1>Todo Management</h1>
            {showSuccess && <div className="success">Autheticated successfully</div>}
            {showError && <div className="error">Authetication failed. Please check your credentials</div>}
            <ShowSuccessComponent />
            <ShowErrorComponent />
            <div className="login-form">
                <label>User Name</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label>password</label>
                <input type="password" name="username" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>


        </div>

    );
}
