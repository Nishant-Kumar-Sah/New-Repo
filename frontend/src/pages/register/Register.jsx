import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
        const [inputs, setInputs] = useState({
                username: "",
                email: "",
                password: "",
                name: "",
        });
        const [err, setErr] = useState(null);

        const handleChange = (e) => {
                setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };

        const handleClick = async (e) => {
                e.preventDefault();

                try {
                        await axios.post("http://localhost:8800/api/auth/register", inputs);
                } catch (err) {
                        setErr(err.response.data);
                }
        };

        console.log()

        return (
                <div className="register">
                        <div className="card">
                                
                                <div className="info">
                                        <h1>Register</h1>
                                        <form>
                                                <input
                                                        type="text"
                                                        placeholder="Username"
                                                        name="username"
                                                        onChange={handleChange}
                                                />
                                                <input
                                                        type="email"
                                                        placeholder="Email"
                                                        name="email"
                                                        onChange={handleChange}
                                                />
                                                <input
                                                        type="password"
                                                        placeholder="Password"
                                                        name="password"
                                                        onChange={handleChange}
                                                />
                                                <input
                                                        type="text"
                                                        placeholder="Name"
                                                        name="name"
                                                        onChange={handleChange}
                                                />
                                                {err && err}
                                                <button onClick={handleClick}>Register</button>
                                        </form>
                                        <div className="bottom">
                                                <p>Already you have an account?</p>
                                                <Link to="/login">
                                                        <span >Login</span>
                                                </Link>

                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Register;
