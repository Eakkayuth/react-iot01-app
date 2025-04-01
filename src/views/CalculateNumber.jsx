import { Box, Typography, Button, Avatar, TextField } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

function CalculateNumber() {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Box sx={{ width: "70%", boxShadow: 2, mx: "auto", my: "auto", p: 3 }}>
          <Avatar
            src={
              "https://cdn.pixabay.com/photo/2021/10/05/21/46/math-6683827_1280.png"
            }
            sx={{ width: 100, height: 100, mx: "auto" }}
          />
          <Typography
            variant="h5"
            sx={{ textAlign: "center", mt: 2, color: "green" }}
          >
            เครื่องคิดเลข
          </Typography>
          <Typography sx={{ mt: 2 }}>ตัวเลขตัวที่ 1</Typography>
          <TextField variant="outlined" fullWidth type="number" />
          <Typography sx={{ mt: 2 }}>ตัวเลขตัวที่ 2</Typography>
          <TextField variant="outlined" fullWidth type="number" />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Select defaultValue={"+"}>
              <MenuItem value={"+"}>+ บวก</MenuItem>
              <MenuItem value={"-"}>- ลบ</MenuItem>
              <MenuItem value={"x"}>x คูณ</MenuItem>
              <MenuItem value={"÷"}>÷ หาร</MenuItem>
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#ea8f14", height: 50 }}
          >
            <Typography sx={{ textAlign: 'center'}}>คำนวณ</Typography>
          </Button>
          <Typography sx={{ textAlign: 'center', mt: 4, color: 'hotpink', fontSize: 100 }}>
            0.00
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default CalculateNumber;
