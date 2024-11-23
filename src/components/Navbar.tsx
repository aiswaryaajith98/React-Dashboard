import {
  AppBar,
  Toolbar,
  Box,
  Typography,

  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Navbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query); 
    onSearch(query); 
  };

  

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        color: "#333",
        boxShadow: "none",
        padding: "0 24px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f1f3f5",
            borderRadius: "20px",
            padding: "4px 16px",
            width: "300px",
            marginLeft:"10px",
          }}
        >
          <SearchIcon sx={{ color: "#888" }} />
          <InputBase
            placeholder="Search"
            value={searchQuery} 
            onChange={handleSearchChange}
            sx={{
              marginLeft: "8px",
              flex: 1,
              color: "#333",
              fontSize: "14px",
            }}
          />
        </Box>

        {/* Date Display */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CalendarTodayIcon sx={{ color: "#888" }} />
          <Typography variant="body2" sx={{ color: "#555", fontWeight: "500" }}>
            {currentDate}
          </Typography>
        </Box>

        
      
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
