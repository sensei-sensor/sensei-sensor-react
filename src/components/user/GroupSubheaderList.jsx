import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GroupSubheaderList() {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_API_HOST +
          "sensei-sensor-php/WebAPI/users/userList/",
        { withCredentials: true }
      )
      .then((response) => [setUserList(response.data)]);
  }, []);

  if (userList === null) {
    return null;
  } else {
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
        {Object.keys(userList).map((key) => (
          <li key={`section-${userList[key].courseId}`}>
            <ul>
              <ListSubheader>{userList[key].courseName}</ListSubheader>
              {Object.keys(userList[key].users).map((item) => (
                <ListItem key={`item-${key}-${item}`}>
                  <ListItemText
                    primary={`${userList[key].users[item].userName}`}
                  />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    );
  }
}
