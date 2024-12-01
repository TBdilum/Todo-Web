import { Switch } from "@mui/material";
import { useEffect } from "react";
import { useDarkMode } from "../components/DarkMode";

function SettingsPage() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#333";
    } else {
      document.body.style.backgroundColor = "#f9f9f9";
    }
  }, [darkMode]);

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
      <Switch checked={darkMode} onChange={toggleDarkMode} />
    </div>
  );
}

export default SettingsPage;
