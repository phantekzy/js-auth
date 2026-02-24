import { useState, type FormEvent } from "react"
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import InputField from "../components/InputField";

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
                <h1 className="text-3xl font-bold mb-6 text-gray-600">Sign in</h1>
                <form onSubmit={handleSubmit} >
                    <InputField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <InputField
                        label="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition mt-4">
                        Login
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Login
