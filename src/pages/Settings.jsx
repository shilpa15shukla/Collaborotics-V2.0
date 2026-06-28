import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <div style={{minHeight:"100vh",background:"#0f0c29",fontFamily:"sans-serif",display:"flex"}}>
      <Sidebar />
      <div style={{flex:1,padding:"32px"}}>
        <h1 style={{color:"white",marginBottom:"8px"}}>⚙️ Settings</h1>
        <p style={{color:"#a0aec0",marginBottom:"32px"}}>Manage your account and preferences</p>

        <div style={{display:"grid",gap:"20px",maxWidth:"600px"}}>
          <div style={{background:"rgba(255,255,255,0.07)",borderRadius:"12px",padding:"24px",border:"1px solid rgba(255,255,255,0.1)"}}>
            <h3 style={{color:"white",marginBottom:"20px"}}>👤 Profile Settings</h3>
            <div style={{marginBottom:"16px"}}>
              <label style={{color:"#a0aec0",fontSize:"13px",display:"block",marginBottom:"6px"}}>Full Name</label>
              <input defaultValue="Aman Shukla" style={{width:"100%",padding:"10px 14px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"white",fontSize:"14px",boxSizing:"border-box"}} />
            </div>
            <div style={{marginBottom:"16px"}}>
              <label style={{color:"#a0aec0",fontSize:"13px",display:"block",marginBottom:"6px"}}>Email</label>
              <input defaultValue="aman@collaborotics.com" style={{width:"100%",padding:"10px 14px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"white",fontSize:"14px",boxSizing:"border-box"}} />
            </div>
            <button style={{background:"linear-gradient(135deg,#667eea,#764ba2)",border:"none",color:"white",padding:"10px 24px",borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"600"}}>Save Changes</button>
          </div>

          <div style={{background:"rgba(255,255,255,0.07)",borderRadius:"12px",padding:"24px",border:"1px solid rgba(255,255,255,0.1)"}}>
            <h3 style={{color:"white",marginBottom:"20px"}}>🔒 Change Password</h3>
            <div style={{marginBottom:"16px"}}>
              <label style={{color:"#a0aec0",fontSize:"13px",display:"block",marginBottom:"6px"}}>Current Password</label>
              <input type="password" placeholder="••••••••" style={{width:"100%",padding:"10px 14px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"white",fontSize:"14px",boxSizing:"border-box"}} />
            </div>
            <div style={{marginBottom:"16px"}}>
              <label style={{color:"#a0aec0",fontSize:"13px",display:"block",marginBottom:"6px"}}>New Password</label>
              <input type="password" placeholder="••••••••" style={{width:"100%",padding:"10px 14px",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"white",fontSize:"14px",boxSizing:"border-box"}} />
            </div>
            <button style={{background:"linear-gradient(135deg,#667eea,#764ba2)",border:"none",color:"white",padding:"10px 24px",borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"600"}}>Update Password</button>
          </div>

          <div style={{background:"rgba(255,255,255,0.07)",borderRadius:"12px",padding:"24px",border:"1px solid rgba(255,255,255,0.1)"}}>
            <h3 style={{color:"white",marginBottom:"20px"}}>🔔 Notifications</h3>
            {["Email Notifications","Task Updates","Robot Alerts","Team Messages"].map((item) => (
              <div key={item} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"}}>
                <span style={{color:"#cbd5e0",fontSize:"14px"}}>{item}</span>
                <div style={{width:"44px",height:"24px",background:"linear-gradient(135deg,#667eea,#764ba2)",borderRadius:"12px",cursor:"pointer"}}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;