import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const res = await axios.get('http://localhost:6969/api/auth/profile', {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                    setUser(res.data.user)
                } catch (err) {
                    console.error(err);
                    localStorage.removeItem("token")
                }
            }
            setLoading(false);
        }
        checkAuth();
    }, [])
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, setUser, lodaing, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
