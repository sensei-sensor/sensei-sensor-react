import { ControlPoint, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export default function GroupList() {
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
              <IconButton edge="end" aria-label="グループを編集">
                <Edit />
              </IconButton>
              <IconButton edge="end" aria-label="グループを削除">
                <Delete />
              </IconButton>
            </>
          }
        >
          <ListItemText primary="Single-line item" />
        </ListItem>
      </List>
    </>
  );
}
