import { Box, Button, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GenericTemplate from "../GenericTemplate.jsx";
import GroupContainer from "../components/main/GroupContainer";
import AddGroupIdModal from "../modals/AddGroupIdModal";

export default function MainPage() {
  function setLocalStorage() {
    localStorage.setItem("groupId", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("groupId"));
  }

  const [groupOpen, setGroupOpen] = useState(false);
  const [groupIdList, setGroupIdList] = useState(
    localStorage.getItem("groupId")
      ? JSON.parse(localStorage.getItem("groupId"))
      : setLocalStorage()
  );
  const handleGroupOpen = () => setGroupOpen(true);
  const handleGroupClose = () => setGroupOpen(false);
  const groupButtonVisible = groupIdList.length !== 0;

  const [groupList, setGroupList] = useState(null);

  useEffect(() => {
    localStorage.setItem("groupId", JSON.stringify(groupIdList));
  }, [groupIdList]);

  useEffect(() => {
    if (groupIdList !== null) {
      groupIdList.map((groupId) => {
        axios
          .get(
            import.meta.env.VITE_API_HOST +
              "sensei-sensor-php/WebAPI/groups/" +
              groupId +
              "/"
          )
          .then((response) => {
            setGroupList(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }, []);

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
    if (groupList) {
      return (
        <GenericTemplate
          groupIdList={groupIdList}
          setGroupIdList={setGroupIdList}
          groupButtonVisible={groupButtonVisible}
        >
          <GroupContainer
            groupName={groupList.groupName}
            users={groupList.users}
          />
        </GenericTemplate>
      );
    } else {
      return null;
    }
  }
}
