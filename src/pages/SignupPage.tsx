import { useState } from "react";
import { supabase } from "../services/supabaseClient";

const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({        
        email: signupData.email, // Assuming username is an email
        password: signupData.password,
      });
  
      if (error) throw error;
  
      alert("Signup successful! Please check your email for verification.");
      setSignupData({ email: "", password: "" });
      console.log('DATA: ',data);
    } catch (error) {
      alert("Error signing up: " + error);
    }
  };
  return (
  <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px"   }}>
    <h1>Signup</h1>
  <input type="email" placeholder="Email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
  <input type="password" placeholder="Password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
  <button onClick={handleSignup}>Signup</button>
  </div>
  );
};

export default SignupPage;