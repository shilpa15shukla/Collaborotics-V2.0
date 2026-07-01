import React, { useState } from "react";

const Dashboard = () => {
  // 1. शुरुआती रोबोट फ्लीट डेटा (Section 5.2 के अनुसार)
  const [robots, setRobots] = useState([
    { id: "ROB-001", name: "Alpha Drone", status: "Active", battery: 85, zone: "Warehouse A" },
    { id: "ROB-002", name: "Beta Rover", status: "Idle", battery: 42, zone: "Loading Dock" },
    { id: "ROB-003", name: "Gamma Loader", status: "Maintenance", battery: 15, zone: "Assembly Line" }
  ]);

  // इनपुट बॉक्स के लिए स्टेट्स
  const [robotName, setRobotName] = useState("");
  const [robotZone, setRobotZone] = useState("Warehouse A");

  // 2. नया रोबोट जोड़ने का फंक्शन
  const handleAddRobot = (e) => {
    e.preventDefault();
    if (!robotName.trim()) return;

    const newRobot = {
      id: `ROB-00${robots.length + 1}`,
      name: robotName,
      status: "Active",
      battery: 100, // नया रोबोट हमेशा फुल चार्ज रहेगा
      zone: robotZone
    };

    setRobots([...robots, newRobot]);
    setRobotName(""); // इनपुट बॉक्स खाली करने के लिए
  };

  // 3. रोबोट का स्टेटस बदलने का फंक्शन (Toggle Status)
  const toggleStatus = (id) => {
    setRobots(robots.map(bot => {
      if (bot.id === id) {
        const nextStatus = bot.status === "Active" ? "Idle" : bot.status === "Idle" ? "Maintenance" : "Active";
        return { ...bot, status: nextStatus };
      }
      return bot;
    }));
  };

  // 4. रोबोट को डिलीट करने का फंक्शन
  const handleDeleteRobot = (id) => {
    if (window.confirm("क्या आप इस रोबोट को फ्लीट से हटाना चाहते हैं?")) {
      setRobots(robots.filter(bot => bot.id !== id));
    }
  };

  // 5. टॉप मैट्रिक्स काउंट्स (ऑटोमैटिक अपडेट होंगे)
  const totalRobots = robots.length;
  const activeRobots = robots.filter(b => b.status === "Active").length;
  const alertsCount = robots.filter(b => b.battery < 20 || b.status === "Maintenance").length;

  return (
    <div style={{ padding: "30px", background: "#0f0f1a", minHeight: "100vh", color: "#ffffff", fontFamily: "Segoe UI, sans-serif" }}>
      
      {/* हेडर सेक्शन */}
      <div style={{ marginBottom: "30px", borderBottom: "1px solid #23233b", paddingBottom: "15px" }}>
        <h1 style={{ margin: 0, color: "#00b4d8", fontSize: "2.5rem" }}>🤖 Collaborotics Dashboard</h1>
        <p style={{ color: "#8a8aa3", margin: "5px 0 0 0" }}>Fleet Management & Real-time Telemetry Control</p>
      </div>

      {/* टॉप मैट्रिक्स कार्ड्स */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
        <div style={{ background: "#16162a", padding: "20px", borderRadius: "12px", borderLeft: "5px solid #00b4d8", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
          <h4 style={{ margin: 0, color: "#8a8aa3", fontSize: "0.9rem" }}>Total Fleet Robots</h4>
          <p style={{ margin: "10px 0 0 0", fontSize: "2rem", fontWeight: "bold", color: "#fff" }}>{totalRobots}</p>
        </div>
        <div style={{ background: "#16162a", padding: "20px", borderRadius: "12px", borderLeft: "5px solid #2a9d8f", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
          <h4 style={{ margin: 0, color: "#8a8aa3", fontSize: "0.9rem" }}>Active Robots</h4>
          <p style={{ margin: "10px 0 0 0", fontSize: "2rem", fontWeight: "bold", color: "#2a9d8f" }}>{activeRobots}</p>
        </div>
        <div style={{ background: "#16162a", padding: "20px", borderRadius: "12px", borderLeft: "5px solid #e76f51", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
          <h4 style={{ margin: 0, color: "#8a8aa3", fontSize: "0.9rem" }}>Critical Alerts</h4>
          <p style={{ margin: "10px 0 0 0", fontSize: "2rem", fontWeight: "bold", color: "#e76f51" }}>{alertsCount}</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
        
        {/* फॉर्म: नया रोबोट जोड़ें */}
        <div style={{ background: "#16162a", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
          <h3 style={{ margin: "0 0 20px 0", color: "#00b4d8" }}>➕ Deploy New Robot</h3>
          <form onSubmit={handleAddRobot} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#8a8aa3", fontSize: "0.9rem" }}>Robot Name</label>
              <input
                type="text"
                placeholder="e.g., Delta Scout"
                value={robotName}
                onChange={(e) => setRobotName(e.target.value)}
                style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #2d2d44", background: "#1e1e38", color: "#fff", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#8a8aa3", fontSize: "0.9rem" }}>Operation Zone</label>
              <select
                value={robotZone}
                onChange={(e) => setRobotZone(e.target.value)}
                style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #2d2d44", background: "#1e1e38", color: "#fff", boxSizing: "border-box" }}
              >
                <option value="Warehouse A">Warehouse A</option>
                <option value="Warehouse B">Warehouse B</option>
                <option value="Loading Dock">Loading Dock</option>
                <option value="Assembly Line">Assembly Line</option>
              </select>
            </div>
            <button type="submit" style={{ width: "100%", padding: "12px", background: "#00b4d8", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold", fontSize: "1rem", marginTop: "10px", transition: "0.3s" }}>
              Launch Robot to Fleet
            </button>
          </form>
        </div>

        {/* लिस्ट: लाइव फ्लीट स्टेटस */}
        <div style={{ background: "#16162a", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
          <h3 style={{ margin: "0 0 20px 0", color: "#00b4d8" }}>📋 Fleet Registry & Operations</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {robots.map((robot) => (
              <div key={robot.id} style={{ padding: "15px", background: "#1e1e38", borderRadius: "8px", border: "1px solid #23233b", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                    <span style={{ color: "#00b4d8", marginRight: "8px" }}>{robot.id}</span>
                    {robot.name}
                  </div>
                  <div style={{ color: "#8a8aa3", fontSize: "0.85rem", marginTop: "4px" }}>📍 {robot.zone}</div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: robot.battery < 20 ? "#e76f51" : "#2a9d8f", fontSize: "0.9rem", fontWeight: "600" }}>
                    🔋 {robot.battery}%
                  </span>
                  
                  {/* स्टेटस बटन (क्लिक करने पर स्टेटस बदलेगा) */}
                  <button 
                    onClick={() => toggleStatus(robot.id)}
                    style={{ 
                      padding: "6px 12px", 
                      borderRadius: "4px", 
                      fontSize: "0.8rem",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "bold",
                      color: "#fff",
                      background: robot.status === "Active" ? "#2a9d8f" : robot.status === "Idle" ? "#e9c46a" : "#e76f51"
                    }}
                  >
                    {robot.status}
                  </button>

                  {/* डिलीट बटन */}
                  <button 
                    onClick={() => handleDeleteRobot(robot.id)}
                    style={{ background: "none", border: "none", color: "#6c757d", cursor: "pointer", fontSize: "1.1rem", padding: "0 5px" }}
                    title="Remove Robot"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
            {robots.length === 0 && (
              <p style={{ textAlign: "center", color: "#8a8aa3" }}>No robots in the fleet. Deploy one above!</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;