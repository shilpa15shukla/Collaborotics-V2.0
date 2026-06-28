import Sidebar from "../components/Sidebar";

function Robots() {
  const robots = [
    { id: "R-01", name: "Alpha Bot", status: "Active", task: "Assembly Line A", battery: 85 },
    { id: "R-02", name: "Beta Bot", status: "Idle", task: "None", battery: 62 },
    { id: "R-03", name: "Gamma Bot", status: "Active", task: "Warehouse B", battery: 91 },
    { id: "R-04", name: "Delta Bot", status: "Maintenance", task: "None", battery: 23 },
    { id: "R-05", name: "Epsilon Bot", status: "Active", task: "Packaging C", battery: 78 },
  ];

  const statusColor = { Active: "#48bb78", Idle: "#ed8936", Maintenance: "#f56565" };

  return (
    <div style={{minHeight:"100vh",background:"#0f0c29",fontFamily:"sans-serif",display:"flex"}}>
      <Sidebar />
      <div style={{flex:1,padding:"32px"}}>
        <h1 style={{color:"white",marginBottom:"8px"}}>🤖 Robot Management</h1>
        <p style={{color:"#a0aec0",marginBottom:"32px"}}>Monitor and manage all robots</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
          {robots.map((robot) => (
            <div key={robot.id} style={{background:"rgba(255,255,255,0.07)",borderRadius:"12px",padding:"24px",border:"1px solid rgba(255,255,255,0.1)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"}}>
                <h3 style={{color:"white",margin:0}}>{robot.name}</h3>
                <span style={{background:statusColor[robot.status],color:"white",padding:"4px 10px",borderRadius:"20px",fontSize:"12px",fontWeight:"600"}}>{robot.status}</span>
              </div>
              <p style={{color:"#a0aec0",fontSize:"13px",margin:"0 0 8px"}}>ID: {robot.id}</p>
              <p style={{color:"#a0aec0",fontSize:"13px",margin:"0 0 16px"}}>Task: {robot.task}</p>
              <div style={{background:"rgba(255,255,255,0.1)",borderRadius:"8px",height:"8px",overflow:"hidden"}}>
                <div style={{width:`${robot.battery}%`,height:"100%",background:"linear-gradient(90deg,#667eea,#764ba2)",borderRadius:"8px"}}></div>
              </div>
              <p style={{color:"#718096",fontSize:"12px",marginTop:"6px"}}>Battery: {robot.battery}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Robots;