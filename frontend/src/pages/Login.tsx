import { useState } from "react"
import { useAuth } from "../hooks/useAuth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useAuth();




    return (
        <div></div>
    )
}

export default Login
