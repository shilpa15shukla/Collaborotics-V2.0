import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      setSuccess("Account created! Redirecting to login...");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed!");
    }
    setLoading(false);
  };

  return (
    <div style={{minHeight:"100vh",background:"#0f0c29",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif"}}>
      <div style={{background:"rgba(255,255,255,0.08)",padding:"40px",borderRadius:"16px",width:"360px",border:"1px solid rgba(255,255,255,0.1)"}}>
        <h1 style={{color:"white",textAlign:"center",marginBottom:"8px"}}>🤖 Collaborotics</h1>
        <p style={{color:"#a0aec0",textAlign:"center",marginBottom:"32px",fontSize:"14px"}}>Create your account</p>

        {error && <p style={{color:"#f56565",textAlign:"center",marginBottom:"16px",fontSize:"13px"}}>{error}</p>}
        {success && <p style={{color:"#48bb78",textAlign:"center",marginBottom:"16px",fontSize:"13px"}}>{success}</p>}

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{width:"100%",padding:"12px",marginBottom:"16px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"white",fontSize:"14px",boxSizing:"border-box"}}
        />
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
          onClick={handleRegister}
          style={{width:"100%",padding:"13px",background:"linear-gradient(135deg,#667eea,#764ba2)",border:"none",borderRadius:"8px",color:"white",fontSize:"15px",fontWeight:"700",cursor:"pointer"}}
        >
          {loading ? "Registering..." : "Register →"}
        </button>
        <p style={{color:"#718096",textAlign:"center",marginTop:"20px",fontSize:"13px"}}>
          Already have account? <span onClick={() => navigate("/")} style={{color:"#667eea",cursor:"pointer"}}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;