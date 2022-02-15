import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AddGroupIdModal from "../../modals/AddGroupIdModal";
import LoginModal from "../../modals/LoginModal";

export default function HeaderBer(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  const title = {
    fontWeight: 700,
    textDecoration: "none",
    color: "primary.main",
  };

  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const [groupOpen, setGroupOpen] = useState(false);
  const handleGroupOpen = () => setGroupOpen(true);
  const handleGroupClose = () => setGroupOpen(false);

  const handleLogoutClick = () => {
    axios
      .post(
        import.meta.env.VITE_API_HOST + "sensei-sensor-php/WebAPI/logout/",
        null,
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status === 200) {
          props.handleLogout();
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMyPageClick = () => {
    navigate("user");
  };

  let button;
  if (location.pathname === "/user" && props.isLogin) {
    button = (
      <Button color="primary" onClick={handleLogoutClick}>
        <Box fontWeight={700}>ログアウト</Box>
      </Button>
    );
  } else if (location.pathname === "/" && props.isLogin) {
    button = (
      <Button color="primary" onClick={handleMyPageClick}>
        <Box fontWeight={700}>マイページ</Box>
      </Button>
    );
  } else if (location.pathname === "/" && !props.isLogin) {
    button = (
      <Button color="primary" onClick={handleLoginOpen}>
        <Box fontWeight={700}>先生向けログイン</Box>
      </Button>
    );
  } else {
    button = null;
  }

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
          {props.visibleGroupButton && (
            <>
              <Button color="primary" onClick={handleGroupOpen}>
                <Box fontWeight={700}>グループIDの追加</Box>
              </Button>
              <AddGroupIdModal
                open={groupOpen}
                handleClose={handleGroupClose}
                setGroupList={props.setGroupList}
                groupIdList={props.groupIdList}
                setGroupIdList={props.setGroupIdList}
              />
            </>
          )}
          {button}
          <LoginModal
            open={loginOpen}
            handleClose={handleLoginClose}
            handleLogin={props.handleLogin}
          />
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
