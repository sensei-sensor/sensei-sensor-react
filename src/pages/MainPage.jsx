import { Box, Button, Container } from "@mui/material";
import React from "react";
import GenericTemplate from "../GenericTemplate.jsx";
import AddGroupIdModal from "../components/main/AddGroupIdModal";
import GroupContainer from "../components/main/GroupContainer";

export default function MainPage() {
  const [groupOpen, setGroupOpen] = React.useState(false);
  const handleGroupOpen = () => setGroupOpen(true);
  const handleGroupClose = () => setGroupOpen(false);

  const groupList = localStorage.getItem("groupId")
    ? JSON.parse(localStorage.getItem("groupId"))
    : localStorage.setItem("groupId", JSON.stringify([]));

  if (!groupList) {
    return;
  }

  if (groupList.length === 0) {
    return (
      <GenericTemplate>
        <Container>
          <Box
            borderRadius={5}
            m={3}
            p={2}
            textAlign={"center"}
            bgcolor={"white"}
          >
            <Button
              variant="contained"
              size={"large"}
              onClick={handleGroupOpen}
            >
              グループIDの追加
            </Button>
          </Box>
        </Container>
        <AddGroupIdModal open={groupOpen} handleClose={handleGroupClose} />
      </GenericTemplate>
    );
  } else {
    return (
      <GenericTemplate>
        {groupList.map((data) => {
          return <GroupContainer key={data} />;
        })}
      </GenericTemplate>
    );
  }
}
