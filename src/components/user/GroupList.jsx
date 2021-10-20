import { ControlPoint, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import GroupEditModal from "./GroupEditModal";

export default function GroupList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant={"h6"}>
          <Box fontWeight={700}>グループ設定</Box>
        </Typography>
        <IconButton edge="end" aria-label="グループを追加">
          <ControlPoint />
        </IconButton>
      </Box>
      <List>
        <ListItem
          secondaryAction={
            <>
              <Button startIcon={<Edit />} onClick={handleOpen}>
                グループを編集
              </Button>
              <IconButton edge="end" aria-label="グループを削除">
                <Delete />
              </IconButton>
              <GroupEditModal open={open} handleClose={handleClose} />
            </>
          }
        >
          <ListItemText primary="Single-line item" />
        </ListItem>
      </List>
    </>
  );
}
