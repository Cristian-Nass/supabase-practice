import { useState } from "react";
import { supabase } from "../services/supabaseClient";

const LogInPage = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleSignup = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: loginData.email, // Assuming username is an email
                password: loginData.password,
            });

            if (error) throw error;

            alert("Signup successful! Please check your email for verification.");
            setLoginData({ email: "", password: "" });
            console.log('DATA: ', data);
        } catch (error) {
            alert("Error signing up: " + error);
        }
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h1>Login</h1>
            <input type="email" placeholder="Email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
            <input type="password" placeholder="Password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default LogInPage;