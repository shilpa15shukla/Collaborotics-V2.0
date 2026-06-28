import Sidebar from "../components/Sidebar";

function Tasks() {
  const tasks = [
    { id:"#T-01", title:"Assembly Line Inspection", robot:"Alpha Bot", priority:"High", status:"In Progress", due:"28 Jun 2026" },
    { id:"#T-02", title:"Warehouse Stock Check", robot:"Gamma Bot", priority:"Medium", status:"Completed", due:"27 Jun 2026" },
    { id:"#T-03", title:"Packaging Unit C", robot:"Epsilon Bot", priority:"High", status:"In Progress", due:"29 Jun 2026" },
    { id:"#T-04", title:"Robot Maintenance Check", robot:"Delta Bot", priority:"Low", status:"Pending", due:"30 Jun 2026" },
    { id:"#T-05", title:"Quality Control Scan", robot:"Beta Bot", priority:"Medium", status:"Pending", due:"01 Jul 2026" },
  ];

  const statusColor = { "In Progress":"#667eea", Completed:"#48bb78", Pending:"#ed8936" };
  const priorityColor = { High:"#f56565", Medium:"#ed8936", Low:"#48bb78" };

  return (
    <div style={{minHeight:"100vh",background:"#0f0c29",fontFamily:"sans-serif",display:"flex"}}>
      <Sidebar />
      <div style={{flex:1,padding:"32px"}}>
        <h1 style={{color:"white",marginBottom:"8px"}}>📋 Task Management</h1>
        <p style={{color:"#a0aec0",marginBottom:"32px"}}>Track and manage all tasks</p>
        <div style={{background:"rgba(255,255,255,0.07)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.1)",overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead>
              <tr style={{background:"rgba(255,255,255,0.05)"}}>
                {["ID","Title","Robot","Priority","Status","Due Date"].map((h) => (
                  <th key={h} style={{padding:"16px",color:"#a0aec0",fontSize:"13px",fontWeight:"600",textAlign:"left",borderBottom:"1px solid rgba(255,255,255,0.1)"}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} style={{borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                  <td style={{padding:"16px",color:"#667eea",fontSize:"14px"}}>{task.id}</td>
                  <td style={{padding:"16px",color:"white",fontSize:"14px"}}>{task.title}</td>
                  <td style={{padding:"16px",color:"#a0aec0",fontSize:"14px"}}>{task.robot}</td>
                  <td style={{padding:"16px"}}>
                    <span style={{background:priorityColor[task.priority],color:"white",padding:"3px 10px",borderRadius:"20px",fontSize:"12px"}}>{task.priority}</span>
                  </td>
                  <td style={{padding:"16px"}}>
                    <span style={{background:statusColor[task.status],color:"white",padding:"3px 10px",borderRadius:"20px",fontSize:"12px"}}>{task.status}</span>
                  </td>
                  <td style={{padding:"16px",color:"#a0aec0",fontSize:"14px"}}>{task.due}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tasks;