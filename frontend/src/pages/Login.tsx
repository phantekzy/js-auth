import { useState, type FormEvent } from "react"
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password })
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            navigate('/');
        } catch (err: any) {
            alert(err.response?.data?.message || "Login Failed")
        }
    }
    return (
        <div className="flex items-center justify-center pt-10">
            <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
                <h1>Login</h1>
            </div>

        </div>
    )
}

export default Login
