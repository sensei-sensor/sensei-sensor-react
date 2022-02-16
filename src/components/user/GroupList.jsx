import { ControlPoint, Delete, Edit } from "@mui/icons-material";
import {
  Button,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EditGroupModal from "../../modals/EditGroupModal";

export default function GroupList() {
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_API_HOST + "sensei-sensor-php/WebAPI/users/group/",
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setGroups(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (groups === null) {
    return <LinearProgress />;
  } else {
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
}
