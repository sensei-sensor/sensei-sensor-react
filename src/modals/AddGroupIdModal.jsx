import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";

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
  const [helperText, setHelperText] = useState(
    "グループIDは半角英数で入力してください"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const groupId = String(data.get("groupId"));

    for (let i = 0; i < props.groupIdList.length; i++) {
      if (props.groupIdList[i] === groupId) {
        setHelperText("そのグループIDはすでに登録されています");
        setInputError(true);
        return;
      }
    }

    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid) {
        setHelperText("グループIDは半角英数かつ必須です");
        setInputError(true);
        return;
      } else {
        setInputError(false);
      }
    }

    axios
      .get(
        import.meta.env.VITE_API_HOST +
          "sensei-sensor-php/WebAPI/groups/" +
          groupId +
          "/"
      )
      .then(() => {
        setHelperText("");
        props.setGroupIdList((groupIdList) => [...groupIdList, groupId]);
        props.handleClose();
      })
      .catch((error) => {
        console.log(error);
        setHelperText("存在しないグループIDです");
        setInputError(true);
        return;
      });
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
                sx={{ mt: 1, width: 400 }}
              >
                <TextField
                  error={inputError}
                  margin="normal"
                  required
                  fullWidth
                  inputProps={{ maxLength: 8, pattern: "^[a-zA-Z0-9_]+$" }}
                  inputRef={inputRef}
                  id="groupId"
                  label="グループID"
                  name="groupId"
                  helperText={helperText}
                  autoComplete={"off"}
                  autoFocus
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
