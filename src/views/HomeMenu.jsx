import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
export default function HomeMenu() {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Box sx={{ width: "70%", boxShadow: 2, mx: "auto", my: "auto", p: 3 }}>
          <Avatar
            src="https://cdn.pixabay.com/photo/2025/03/22/20/26/ai-generated-9487507_1280.png"
            sx={{ width: 100, height: 100,mx:'auto' }}
          />
          <Typography
            variant="h3"
            sx={{ textAlign: "center", mt: 2, color: "primary.main" }}
          >
            IoT Calculator by Eakkayut
          </Typography>
        
        </Box>
      </Box>
    </>
  );
}