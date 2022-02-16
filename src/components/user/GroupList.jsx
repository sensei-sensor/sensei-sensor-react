import { ControlPoint, Delete, Edit } from "@mui/icons-material";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import EditGroupModal from "../../modals/EditGroupModal";

export default function GroupList() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton edge="end" aria-label="グループを追加">
        <ControlPoint />
      </IconButton>
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
              <EditGroupModal open={open} handleClose={handleClose} />
            </>
          }
        >
          <ListItemText primary="Single-line item" />
        </ListItem>
      </List>
    </>
  );
}
