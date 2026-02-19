import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface User {
    id: string;
    username: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    loading: boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const res = await axios.get("http://localhost:6969/api/auth/profile", {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUser(res.data.user);
                } catch (error) {
                    console.error("Auth check failed:", error);
                    localStorage.removeItem("token");
                }
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

