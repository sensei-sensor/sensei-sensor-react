import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import GenericTemplate from "../GenericTemplate.jsx";
import GroupContainer from "../components/main/GroupContainer";
import AddGroupIdModal from "../modals/AddGroupIdModal";

export default function MainPage(props) {
  const initialLocalStorage = () => {
    localStorage.setItem("groupId", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("groupId"));
  };

  const [groupOpen, setGroupOpen] = React.useState(false);
  const [groupIdList, setGroupIdList] = useState(
    localStorage.getItem("groupId")
      ? JSON.parse(localStorage.getItem("groupId"))
      : initialLocalStorage()
  );

  const handleGroupOpen = () => setGroupOpen(true);
  const handleGroupClose = () => setGroupOpen(false);

  const visibleGroupButton = groupIdList.length !== 0;

  useEffect(() => {
    localStorage.setItem("groupId", JSON.stringify(groupIdList));
  }, [groupIdList]);

  if (groupIdList.length === 0) {
    return (
      <GenericTemplate isLogin={props.isLogin} handleLogin={props.handleLogin}>
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
      <GenericTemplate
        groupIdList={groupIdList}
        setGroupIdList={setGroupIdList}
        visibleGroupButton={visibleGroupButton}
        isLogin={props.isLogin}
        handleLogin={props.handleLogin}
      >
        {groupIdList.map((data) => {
          return <GroupContainer key={data} />;
        })}
      </GenericTemplate>
    );
  }
}
