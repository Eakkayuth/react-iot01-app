import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
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
            variant="h5"
            sx={{ textAlign: "center", mt: 2, color: "primary.main" }}
          >
            IoT Calculator by Eakkayut
          </Typography>
          <Link to={'/calnum'}>
           <Button fullWidth variant='contained' sx={{ mt: 2, backgroundColor: '#0fe667'}}>
            <Typography variant="h6" sx={{ textAlign: 'center'}}>
              Go To Calculate Number
            </Typography>
          </Button>
          </Link>
         
          <Button component={Link} to={'/calmoneyshare'} fullWidth variant='contained' sx={{ mt: 2, backgroundColor: '#0fd9e6'}}>
            <Typography variant="h6" sx={{ textAlign: 'center'}}>
              Go To Calculate MoneyShare
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}