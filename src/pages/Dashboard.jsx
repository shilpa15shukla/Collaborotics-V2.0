import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div style={{minHeight:"100vh",background:"#0f0c29",fontFamily:"sans-serif",display:"flex"}}>
      <Sidebar />
      <div style={{flex:1,padding:"32px"}}>
        <h1 style={{color:"white",marginBottom:"8px"}}>Welcome to Collaborotics 👋</h1>
        <p style={{color:"#a0aec0",marginBottom:"32px"}}>Here's your workspace overview</p>

        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px",marginBottom:"32px"}}>
          {[
            {label:"Total Robots",value:"12",color:"#667eea"},
            {label:"Active Tasks",value:"34",color:"#48bb78"},
            {label:"Team Members",value:"8",color:"#ed8936"},
            {label:"Reports",value:"5",color:"#f56565"},
          ].map((stat) => (
            <div key={stat.label} style={{background:"rgba(255,255,255,0.07)",borderRadius:"12px",padding:"20px",border:"1px solid rgba(255,255,255,0.1)"}}>
              <p style={{color:"#a0aec0",fontSize:"13px",margin:"0 0 8px"}}>{stat.label}</p>
              <h2 style={{color:stat.color,fontSize:"32px",margin:0}}>{stat.value}</h2>
            </div>
          ))}
        </div>

        <div style={{background:"rgba(255,255,255,0.07)",borderRadius:"12px",padding:"24px",border:"1px solid rgba(255,255,255,0.1)"}}>
          <h3 style={{color:"white",marginBottom:"16px"}}>Recent Activity</h3>
          {[
            {text:"Robot R-01 completed Task #12",time:"2 mins ago"},
            {text:"New team member added: Rahul",time:"15 mins ago"},
            {text:"Task #15 assigned to Robot R-03",time:"1 hour ago"},
            {text:"Report generated for June 2026",time:"2 hours ago"},
          ].map((item,i) => (
            <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
              <span style={{color:"#cbd5e0",fontSize:"14px"}}>{item.text}</span>
              <span style={{color:"#718096",fontSize:"12px"}}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;