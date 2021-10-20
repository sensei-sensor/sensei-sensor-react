import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

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
  const inputRef = useRef(null);
  const [inputError, setInputError] = useState(false);
  const [helperText, setHelperText] = useState("グループIDは必須です。");

  useEffect(() => {
    localStorage.getItem("groupId")
      ? JSON.parse(localStorage.getItem("groupId"))
      : localStorage.setItem("groupId", JSON.stringify([]));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const groupIdList = JSON.parse(localStorage.getItem("groupId"));

    for (let i = 0; i < groupIdList.length; i++) {
      if (groupIdList[i] === String(data.get("groupId"))) {
        setHelperText("そのグループIDは登録されています。");
        setInputError(true);
        return;
      }
    }

    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid) {
        setHelperText("グループIDは必須です。");
        setInputError(true);
      } else {
        groupIdList.push(String(data.get("groupId")));
        localStorage.setItem("groupId", JSON.stringify(groupIdList));
        setInputError(false);
      }
    }
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
                  error={inputError}
                  margin="normal"
                  required
                  fullWidth
                  inputProps={{ pattern: "^[a-zA-Z0-9_]+$" }}
                  inputRef={inputRef}
                  id="groupId"
                  label="グループID"
                  name="groupId"
                  helperText={helperText}
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
