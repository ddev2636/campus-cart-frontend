import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function MultilineTextFields() {
  const handle = () => {
    console.log("hello");
  };

  useEffect(() => {
    handle();
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.5rem",
        width: "22rem",
        margin: "auto",
        marginTop: "-1.5rem",
      }}
    >
      <Box sx={{ fontSize: "2rem" }}>Contact Us</Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20rem" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Email Address"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-textarea"
            label="Phone Number"
            placeholder="Phone Number"
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={8}
            defaultValue=""
          />
          <Button
            variant="contained"
            sx={{ width: "20rem", margin: "auto", marginTop: ".5rem" }}
            onClick={handle}
          >
            Sumit
          </Button>
        </div>
      </Box>
    </Box>
  );
}
