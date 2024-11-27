import { Switch } from "@mui/material";
import React from "react";

function SettingsPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 3rem",
        fontSize: "1.5rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        border: "1px solid #ddd",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "2rem auto",
      }}
    >
      <span style={{ fontWeight: "bold", color: "#333" }}>Dark Mode</span>
      <Switch defaultChecked={false} />
    </div>
  );
}

export default SettingsPage;
