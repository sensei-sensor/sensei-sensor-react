import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  Modal,
  TextField,
  Typography,
  Snackbar,
  Portal,
  Alert,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal(props) {
  const navigate = useNavigate();

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const vertical = "bottom";
  const horizontal = "center";

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    axios
      .post(
        import.meta.env.VITE_API_HOST + "sensei-sensor-php/WebAPI/login/",
        {
          userName: formData.get("userName"),
          password: formData.get("password"),
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          props.handleLogin();
          navigate("user");
        }
      })
      .catch((error) => {
        console.log(error);
        setSnackbarOpen(true);
      });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                College Sensor ログイン
              </Typography>
              <Box
                component="form"
                onSubmit={handleLoginSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label="ユーザー名"
                  name="userName"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="パスワード"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="ログイン情報を記憶する"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  ログイン
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Portal>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            ユーザー名またはパスワードが間違っています
          </Alert>
        </Snackbar>
      </Portal>
    </div>
  );
}
