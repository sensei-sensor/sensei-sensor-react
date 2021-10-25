import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddGroupIdModal from "../main/AddGroupIdModal";
import LoginModal from "../main/LoginModal";

export default function HeaderBer(props) {
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const [groupOpen, setGroupOpen] = useState(false);
  const handleGroupOpen = () => setGroupOpen(true);
  const handleGroupClose = () => setGroupOpen(false);

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  const title = {
    fontWeight: 700,
    textDecoration: "none",
    color: "primary.main",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={"inherit"}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
            }}
          >
            <Box sx={title} component={Link} to={"/"}>
              College Sensor
            </Box>
          </Typography>
          <Button color="primary" onClick={handleGroupOpen}>
            <Box fontWeight={700}>グループIDの追加</Box>
          </Button>
          <Button color="primary" onClick={handleLoginOpen}>
            <Box fontWeight={700}>先生向けログイン</Box>
          </Button>
          <LoginModal open={loginOpen} handleClose={handleLoginClose} />
          <AddGroupIdModal
            open={groupOpen}
            handleClose={handleGroupClose}
            groupIdList={props.groupIdList}
            setGroupIdList={props.setGroupIdList}
          />
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
