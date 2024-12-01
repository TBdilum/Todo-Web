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
        alignItems: "center",
        marginRight: "20px",
        marginLeft: "5px",
        marginTop: "10px",
        backgroundColor: "#DEB9FA",
        boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.1)",
        padding: "10px",
        borderRadius: "16px",
      }}
    >
      <PlaylistAddCheckIcon style={{ fontSize: "4rem", color: "#AB6ADC" }} />

      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "300px",
          "& .MuiTabs-indicator": {
            backgroundColor: "#C483F6",
            bottom: "-3px",
            height: "4px",
            borderRadius: "4px",
          },
        }}
      >
        <Tab
          component={Link}
          to="/"
          label="Todos"
          sx={{
            color: "white",
            backgroundColor: "#BD75F4",
            padding: "0.5rem 1rem",
            borderRadius: "16px",
            height: "auto",
            "&:hover": {
              backgroundColor: "#C483F6",
              transition: "ease-in 0.2s",
            },
            marginRight: "16px",
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "#C483F6",
            },
            boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.1)",
          }}
        />
        <Tab
          component={Link}
          to="/settings"
          label="Settings"
          sx={{
            color: "white",
            backgroundColor: "#BD75F4",
            padding: "0.5rem 1rem",
            borderRadius: "16px",
            height: "auto",
            boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: "#C483F6",
              transition: "ease-in 0.2s",
            },
            marginRight: "16px",
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "#C483F6",
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
