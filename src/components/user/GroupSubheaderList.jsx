import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import React from "react";

export default function GroupSubheaderList() {
  return (
    <List
      sx={{
        width: "100%",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        background: "background.paper",
        border: "1px solid #C1C1C1",
        borderRadius: "4px",
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {["機械", "電気", "情報", "建設", "化学"].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{`${sectionId}コース`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
