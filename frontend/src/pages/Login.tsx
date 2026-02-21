import { useState, type FormEvent } from "react"
import { useAuth } from "../hooks/useAuth";
import { useNavigation } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useAuth();
    const navigate = useNavigation();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password })
        } catch (error) {

        }
    }
    return (
        <div></div>
    )
}

export default Login
