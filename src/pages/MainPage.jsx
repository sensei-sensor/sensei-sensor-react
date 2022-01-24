import { Box, Button, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GenericTemplate from "../GenericTemplate.jsx";
import GroupContainer from "../components/main/GroupContainer";
import AddGroupIdModal from "../modals/AddGroupIdModal";

export default function MainPage(props) {
  const initialLocalStorage = () => {
    localStorage.setItem("groupId", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("groupId"));
  };

  const [groupOpen, setGroupOpen] = useState(false);
  const [groupIdList, setGroupIdList] = useState(
    localStorage.getItem("groupId")
      ? JSON.parse(localStorage.getItem("groupId"))
      : initialLocalStorage()
  );

  const handleGroupOpen = () => setGroupOpen(true);
  const handleGroupClose = () => setGroupOpen(false);

  const visibleGroupButton = groupIdList.length !== 0;

  const [groupList, setGroupList] = useState(null);

  useEffect(() => {
    localStorage.setItem("groupId", JSON.stringify(groupIdList));
  }, [groupIdList]);

  useEffect(() => {
    if (groupIdList !== null) {
      axios
        .post(
          import.meta.env.VITE_API_HOST + "sensei-sensor-php/WebAPI/groups/",
          { groupId: groupIdList }
        )
        .then((response) => {
          setGroupList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          setGroupList={setGroupList}
          setGroupIdList={setGroupIdList}
        />
      </GenericTemplate>
    );
  } else {
    if (groupList) {
      return (
        <GenericTemplate
          groupIdList={groupIdList}
          setGroupList={setGroupList}
          setGroupIdList={setGroupIdList}
          visibleGroupButton={visibleGroupButton}
        >
          {Object.keys(groupList).map((key) => {
            return (
              <GroupContainer
                key={key}
                groupName={groupList[key].groupName}
                users={groupList[key].users}
              />
            );
          })}
        </GenericTemplate>
      );
    } else {
      return null;
    }
  }
}
