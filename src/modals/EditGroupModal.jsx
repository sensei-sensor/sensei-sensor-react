import {
  Backdrop,
  Box,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

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

export default function EditGroupModal(props) {
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
          timeout: 100,
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
                5I グループの編集
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="groupName"
                label="グループ名"
                name="groupName"
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
