import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "none",
        backgroundColor: "#0096FF",
        borderRadius: "0.5rem",
        borderShadow: "0.1rem 0.1rem 0.1rem #000000",
        alignItems: "center",
      }}
    >
      <PlaylistAddCheckIcon style={{ fontSize: "4rem", color: "#305cdef" }} />

      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ height: "fit-content" }}
      >
        <Tab
          component={Link}
          to="/"
          label="Todos"
          sx={{
            color: value === 0 ? "white" : "black",
            backgroundColor: value === 0 ? "#59b5f7" : "transparent",
            borderColor: value === 0 ? "#000000" : "transparent",
            borderWidth: value === 0 ? "10px" : "none",
            padding: "2rem 1rem",
            border: "1px solid #000000",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": { backgroundColor: "#59b5f7", color: "white" },
          }}
        />
        <Tab
          component={Link}
          to="/settings"
          label="Settings"
          sx={{
            color: value === 1 ? "white" : "black",
            backgroundColor: value === 1 ? "#59b5f7" : "transparent",
            borderColor: value === 1 ? "#000000" : "transparent",
            borderWidth: value === 1 ? "10px" : "none",
            padding: "2rem 1rem",
            border: "1px solid #000000",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": { backgroundColor: "#59b5f7", color: "white" },
          }}
        />
      </Tabs>
    </Box>
  );
}
