import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

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

export default function AddGroupIdModal(props) {
  useEffect(() => {
    localStorage.getItem("groupId")
      ? JSON.parse(localStorage.getItem("groupId"))
      : localStorage.setItem("groupId", JSON.stringify([]));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const groupIdList = JSON.parse(localStorage.getItem("groupId"));
    groupIdList.push(String(data.get("groupId")));

    localStorage.setItem("groupId", JSON.stringify(groupIdList));
  };

  return (
    <div>
      <Modal
        aria-labelledby="add-group-id-modal"
        aria-describedby="add-a-group-id"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                グループの追加
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="groupId"
                  label="グループID"
                  name="groupId"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  グループを追加
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
