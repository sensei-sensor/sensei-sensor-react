import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const title = {
  flexGrow: 1,
  fontWeight: 700,
  textDecoration: "none",
};

export default function HeaderBer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"default"}>
        <Toolbar>
          <Typography
            variant="h5"
            color={"primary"}
            sx={title}
            component={Link}
            to={"/"}
          >
            <Box fontWeight={700}>College Sensor</Box>
          </Typography>
          <Button color="primary" onClick={handleOpen}>
            <Box fontWeight={700}>先生向けログイン</Box>
          </Button>
          <LoginModal open={open} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
