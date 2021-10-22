import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import GenericTemplate from "../GenericTemplate.jsx";
import AddGroupIdModal from "../components/main/AddGroupIdModal";
import GroupContainer from "../components/main/GroupContainer";

export default function MainPage() {
  const [groupOpen, setGroupOpen] = React.useState(false);
  const [groupIdList, setGroupIdList] = useState(
    localStorage.getItem("groupId")
      ? JSON.parse(localStorage.getItem("groupId"))
      : localStorage.setItem("groupId", JSON.stringify([]))
  );
  const handleGroupOpen = () => setGroupOpen(true);
  const handleGroupClose = () => setGroupOpen(false);

  useEffect(() => {
    localStorage.setItem("groupId", JSON.stringify(groupIdList));
  }, [groupIdList]);

  if (!groupIdList) {
    return;
  }

  if (groupIdList.length === 0) {
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
        <AddGroupIdModal
          open={groupOpen}
          handleClose={handleGroupClose}
          groupIdList={groupIdList}
          setGroupIdList={setGroupIdList}
        />
      </GenericTemplate>
    );
  } else {
    return (
      <GenericTemplate>
        {groupIdList.map((data) => {
          return <GroupContainer key={data} />;
        })}
      </GenericTemplate>
    );
  }
}
