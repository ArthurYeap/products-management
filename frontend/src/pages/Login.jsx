import { useState , useEffect} from 'react';
import './Login.css';
import api from "../utils/api";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const userToken = localStorage.getItem("token");
        console.log(userToken);
        if (userToken !== null) navigate("/products");
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // 💡 Add your login / authentication logic here
        console.log('Form submitted:', { email, password });
        try {
            const response = await api.post("/users/login", {
                email,
                password
            })
            localStorage.setItem("token", response.data.token)
            console.log("Login successful: ", response.data)
            alert("Login Successful!")
            navigate('/products')
        } catch (error) {
            console.log('Login Error: ', error)
        }
    };

    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit} className="login-card">
                <h2>Welcome Back</h2>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                </div>

                <button type="submit" className="login-btn">
                    Log In
                </button>
            <Link to="/register">
                <button className="signup-btn">Sign up here</button>
            </Link>
            </form>
        </div>
    );
}

export default Login