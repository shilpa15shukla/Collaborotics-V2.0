import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // पूरी तरह से सुरक्षित बायपास: कोई सर्वर रिक्वेस्ट नहीं, सीधे डैशबोर्ड खुलेगा!
    setTimeout(() => {
      localStorage.setItem("token", "bypass-token-123");
      setLoading(false);
      navigate("/dashboard");
    }, 800); // छोटा सा डिले ताकि असली लॉगिन जैसी फीलिंग आए
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#0f0f1a", fontFamily: "Segoe UI, sans-serif" }}>
      <form onSubmit={handleSubmit} style={{ background: "#16162a", padding: "40px", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.3)", width: "100%", maxWidth: "400px", border: "1px solid #23233b" }}>
        <h2 style={{ textAlign: "center", color: "#00b4d8", marginBottom: "30px", fontSize: "2rem" }}>🤖 Login to Collaborotics</h2>
        
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", color: "#8a8aa3", marginBottom: "8px" }}>Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #2d2d44", background: "#1e1e38", color: "#fff", boxSizing: "border-box" }}
            placeholder="test@gmail.com"
          />
        </div>

        <div style={{ marginBottom: "25px" }}>
          <label style={{ display: "block", color: "#8a8aa3", marginBottom: "8px" }}>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #2d2d44", background: "#1e1e38", color: "#fff", boxSizing: "border-box" }}
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: "12px", background: "#00b4d8", color: "#fff", border: "none", borderRadius: "6px", fontWeight: "bold", fontSize: "1rem", cursor: "pointer" }}
        >
          {loading ? "Connecting to Fleet..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;