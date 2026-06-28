import Sidebar from "../components/Sidebar";

function Team() {
  const members = [
    { id:1, name:"Aman Shukla", role:"Project Lead", status:"Online", tasks:8, avatar:"AS" },
    { id:2, name:"Rahul Verma", role:"Robot Engineer", status:"Online", tasks:5, avatar:"RV" },
    { id:3, name:"Priya Singh", role:"Software Dev", status:"Offline", tasks:6, avatar:"PS" },
    { id:4, name:"Amit Kumar", role:"Data Analyst", status:"Online", tasks:3, avatar:"AK" },
    { id:5, name:"Sneha Gupta", role:"QA Engineer", status:"Offline", tasks:4, avatar:"SG" },
  ];

  const statusColor = { Online:"#48bb78", Offline:"#718096" };

  return (
    <div style={{minHeight:"100vh",background:"#0f0c29",fontFamily:"sans-serif",display:"flex"}}>
      <Sidebar />
      <div style={{flex:1,padding:"32px"}}>
        <h1 style={{color:"white",marginBottom:"8px"}}>👥 Team Management</h1>
        <p style={{color:"#a0aec0",marginBottom:"32px"}}>Manage your team members</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
          {members.map((member) => (
            <div key={member.id} style={{background:"rgba(255,255,255,0.07)",borderRadius:"12px",padding:"24px",border:"1px solid rgba(255,255,255,0.1)",textAlign:"center"}}>
              <div style={{width:"60px",height:"60px",borderRadius:"50%",background:"linear-gradient(135deg,#667eea,#764ba2)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:"18px",fontWeight:"700",color:"white"}}>
                {member.avatar}
              </div>
              <h3 style={{color:"white",margin:"0 0 4px"}}>{member.name}</h3>
              <p style={{color:"#a0aec0",fontSize:"13px",margin:"0 0 16px"}}>{member.role}</p>
              <span style={{background:statusColor[member.status],color:"white",padding:"3px 10px",borderRadius:"20px",fontSize:"12px"}}>{member.status}</span>
              <p style={{color:"#718096",fontSize:"13px",marginTop:"16px"}}>Active Tasks: <span style={{color:"#667eea",fontWeight:"700"}}>{member.tasks}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;