import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AddGroupIdModal from "../main/AddGroupIdModal";
import LoginModal from "../main/LoginModal";

const title = {
  flexGrow: 1,
  fontWeight: 700,
  textDecoration: "none",
};

export default function HeaderBer() {
  const [loginOpen, setLoginOpen] = React.useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const [groupOpen, setGroupOpen] = React.useState(false);
  const handleGroupOpen = () => setGroupOpen(true);
  const handleGroupClose = () => setGroupOpen(false);

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={"default"}>
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
          <Button color="primary" onClick={handleGroupOpen}>
            <Box fontWeight={700}>グループIDの追加</Box>
          </Button>
          <Button color="primary" onClick={handleLoginOpen}>
            <Box fontWeight={700}>先生向けログイン</Box>
          </Button>
          <LoginModal open={loginOpen} handleClose={handleLoginClose} />
          <AddGroupIdModal open={groupOpen} handleClose={handleGroupClose} />
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
