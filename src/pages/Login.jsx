import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
  "https://collaborotics-v2-0-1.onrender.com/api/auth/login",
  { email, password }
);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
    setLoading(false);
  };

  return (
    <div style={{minHeight:"100vh",background:"#0f0c29",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif"}}>
      <div style={{background:"rgba(255,255,255,0.08)",padding:"40px",borderRadius:"16px",width:"360px",border:"1px solid rgba(255,255,255,0.1)"}}>
        <h1 style={{color:"white",textAlign:"center",marginBottom:"8px"}}>🤖 Collaborotics</h1>
        <p style={{color:"#a0aec0",textAlign:"center",marginBottom:"32px",fontSize:"14px"}}>Sign in to your workspace</p>

        {error && <p style={{color:"#f56565",textAlign:"center",marginBottom:"16px",fontSize:"13px"}}>{error}</p>}

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{width:"100%",padding:"12px",marginBottom:"16px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"white",fontSize:"14px",boxSizing:"border-box"}}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{width:"100%",padding:"12px",marginBottom:"24px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"white",fontSize:"14px",boxSizing:"border-box"}}
        />
        <button
          onClick={handleLogin}
          style={{width:"100%",padding:"13px",background:"linear-gradient(135deg,#667eea,#764ba2)",border:"none",borderRadius:"8px",color:"white",fontSize:"15px",fontWeight:"700",cursor:"pointer"}}
        >
          {loading ? "Signing in..." : "Sign In →"}
        </button>
        <p style={{color:"#718096",textAlign:"center",marginTop:"20px",fontSize:"13px"}}>
          No account? <span onClick={() => navigate("/register")} style={{color:"#667eea",cursor:"pointer"}}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;