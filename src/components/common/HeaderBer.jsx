import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddGroupIdModal from "../../modals/AddGroupIdModal";
import LoginModal from "../../modals/LoginModal";

export default function HeaderBer(props) {
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const [groupOpen, setGroupOpen] = useState(false);
  const handleGroupOpen = () => setGroupOpen(true);
  const handleGroupClose = () => setGroupOpen(false);

  const [isLogin, setIsLogin] = useState(false);
  const handleIsLogin = () => setIsLogin(true);
  const handleIsNotLogin = () => setIsLogin(false);

  const navigate = useNavigate();

  const handleMyPageClick = () => {
    navigate("UserPage");
  };

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  const title = {
    fontWeight: 700,
    textDecoration: "none",
    color: "primary.main",
  };

  useEffect(() => {
    axios
      .post(
        import.meta.env.VITE_API_HOST + "sensei-sensor-php/WebAPI/checkLogin/",
        null,
        { withCredentials: true }
      )
      .then(handleIsLogin)
      .catch(handleIsNotLogin);
  }, []);

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
          {props.groupButtonVisible && (
            <>
              <Button color="primary" onClick={handleGroupOpen}>
                <Box fontWeight={700}>グループIDの追加</Box>
              </Button>
              <AddGroupIdModal
                open={groupOpen}
                handleClose={handleGroupClose}
                groupIdList={props.groupIdList}
                setGroupIdList={props.setGroupIdList}
              />
            </>
          )}
          {isLogin ? (
            <Button color="primary" onClick={handleMyPageClick}>
              <Box fontWeight={700}>マイページ</Box>
            </Button>
          ) : (
            <Button color="primary" onClick={handleLoginOpen}>
              <Box fontWeight={700}>先生向けログイン</Box>
            </Button>
          )}
          <LoginModal open={loginOpen} handleClose={handleLoginClose} />
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
