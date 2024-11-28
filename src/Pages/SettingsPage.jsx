import { Switch } from "@mui/material";
import React, { useState } from "react";

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
        backgroundColor: darkMode ? "#333" : "#f9f9f9",
        color: darkMode ? "#fff" : "#333",
        borderRadius: "10px",
        border: "1px solid #ddd",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "2rem auto",
      }}
    >
      <span style={{ fontWeight: "bold" }}>Dark Mode</span>
      <Switch checked={darkMode} onChange={handleToggle} />
    </div>
  );
}

export default SettingsPage;
