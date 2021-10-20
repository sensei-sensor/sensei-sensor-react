import { Box, Button, Container } from "@mui/material";
import React from "react";
import GenericTemplate from "../GenericTemplate.jsx";
import AddGroupIdModal from "../components/main/AddGroupIdModal";
import GroupContainer from "../components/main/GroupContainer";

export default function MainPage() {
  const [groupOpen, setGroupOpen] = React.useState(false);
  const handleGroupOpen = () => setGroupOpen(true);
  const handleGroupClose = () => setGroupOpen(false);
  const groupList = JSON.parse(localStorage.getItem("groupId"));

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
            <Button color="primary" onClick={handleGroupOpen}>
              <Box fontWeight={700}>グループIDの追加</Box>
            </Button>
          </Box>
        </Container>
        <AddGroupIdModal open={groupOpen} handleClose={handleGroupClose} />
      </GenericTemplate>
    );
  } else {
    return (
      <GenericTemplate>
        <GroupContainer />
        <GroupContainer />
      </GenericTemplate>
    );
  }
}
