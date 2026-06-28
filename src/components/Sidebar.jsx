import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: "📊" },
    { label: "Robots", path: "/robots", icon: "🤖" },
    { label: "Tasks", path: "/tasks", icon: "📋" },
    { label: "Team", path: "/team", icon: "👥" },
    { label: "Reports", path: "/reports", icon: "📈" },
    { label: "Settings", path: "/settings", icon: "⚙️" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div style={{width:"240px",minHeight:"100vh",background:"rgba(255,255,255,0.05)",borderRight:"1px solid rgba(255,255,255,0.1)",padding:"24px 16px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      <div>
        <h2 style={{color:"white",fontSize:"18px",marginBottom:"8px",textAlign:"center"}}>🤖 Collaborotics</h2>
        <p style={{color:"#a0aec0",fontSize:"12px",textAlign:"center",marginBottom:"32px"}}>{user.name || "User"}</p>
        <nav>
          {menuItems.map((item) => (
            <div key={item.label}
              onClick={() => navigate(item.path)}
              style={{
                padding:"12px 16px",
                marginBottom:"8px",
                borderRadius:"8px",
                color: location.pathname === item.path ? "white" : "#a0aec0",
                background: location.pathname === item.path ? "linear-gradient(135deg,#667eea,#764ba2)" : "transparent",
                cursor:"pointer",
                fontSize:"14px",
                display:"flex",
                gap:"10px",
                alignItems:"center",
              }}
              onMouseEnter={e => {
                if(location.pathname !== item.path)
                  e.currentTarget.style.background="rgba(102,126,234,0.2)"
              }}
              onMouseLeave={e => {
                if(location.pathname !== item.path)
                  e.currentTarget.style.background="transparent"
              }}
            >
              {item.icon} {item.label}
            </div>
          ))}
        </nav>
      </div>
      <button
        onClick={handleLogout}
        style={{width:"100%",padding:"12px",background:"rgba(245,101,101,0.2)",border:"1px solid rgba(245,101,101,0.3)",borderRadius:"8px",color:"#f56565",fontSize:"14px",cursor:"pointer",fontWeight:"600"}}
      >
        🚪 Logout
      </button>
    </div>
  );
}

export default Sidebar;