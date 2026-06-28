import Sidebar from "../components/Sidebar";

function Reports() {
  const reports = [
    { id:"R-001", title:"June 2026 Performance Report", type:"Monthly", date:"28 Jun 2026", status:"Ready" },
    { id:"R-002", title:"Robot Efficiency Analysis", type:"Weekly", date:"25 Jun 2026", status:"Ready" },
    { id:"R-003", title:"Task Completion Summary", type:"Weekly", date:"21 Jun 2026", status:"Ready" },
    { id:"R-004", title:"Team Productivity Report", type:"Monthly", date:"01 Jun 2026", status:"Archived" },
    { id:"R-005", title:"Maintenance Log Q2 2026", type:"Quarterly", date:"15 Jun 2026", status:"Ready" },
  ];

  const statusColor = { Ready:"#48bb78", Archived:"#718096" };
  const typeColor = { Monthly:"#667eea", Weekly:"#ed8936", Quarterly:"#f56565" };

  return (
    <div style={{minHeight:"100vh",background:"#0f0c29",fontFamily:"sans-serif",display:"flex"}}>
      <Sidebar />
      <div style={{flex:1,padding:"32px"}}>
        <h1 style={{color:"white",marginBottom:"8px"}}>📈 Reports</h1>
        <p style={{color:"#a0aec0",marginBottom:"32px"}}>View and download all reports</p>
        <div style={{display:"grid",gap:"16px"}}>
          {reports.map((report) => (
            <div key={report.id} style={{background:"rgba(255,255,255,0.07)",borderRadius:"12px",padding:"20px 24px",border:"1px solid rgba(255,255,255,0.1)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <h3 style={{color:"white",margin:"0 0 8px",fontSize:"16px"}}>{report.title}</h3>
                <p style={{color:"#718096",fontSize:"13px",margin:0}}>ID: {report.id} | Date: {report.date}</p>
              </div>
              <div style={{display:"flex",gap:"12px",alignItems:"center"}}>
                <span style={{background:typeColor[report.type],color:"white",padding:"4px 12px",borderRadius:"20px",fontSize:"12px"}}>{report.type}</span>
                <span style={{background:statusColor[report.status],color:"white",padding:"4px 12px",borderRadius:"20px",fontSize:"12px"}}>{report.status}</span>
                <button style={{background:"linear-gradient(135deg,#667eea,#764ba2)",border:"none",color:"white",padding:"8px 16px",borderRadius:"8px",cursor:"pointer",fontSize:"13px"}}>Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;