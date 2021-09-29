import { Box, Container, IconButton, Typography } from "@material-ui/core";
import { ControlPointRounded } from "@material-ui/icons";
import React from "react";
import GroupList from "../components/user/GroupList";
import PublicationDays from "../components/user/PublicationDays";
import PublicationList from "../components/user/PublicationList";
import PublicationTime from "../components/user/PublicationTime";

export default function UserPage() {
  return (
    <Container>
      <Box m={3} p={2} borderRadius={5} bgcolor={"white"}>
        <Box textAlign={"center"}>
          <Typography variant={"h5"}>
            <Box fontWeight={700}>先生向け設定ページ</Box>
          </Typography>
        </Box>
        <Box>
          <Typography variant={"h6"}>
            <Box fontWeight={700}>公開時間</Box>
          </Typography>
          <PublicationDays />
          <PublicationTime />
        </Box>
        <Box mt={3}>
          <Typography variant={"h6"}>
            <Box fontWeight={700}>公開場所</Box>
          </Typography>
          <PublicationList />
        </Box>
        <Box mt={3}>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>グループ設定</Box>
            </Typography>
            <IconButton edge="end" aria-label="グループを削除">
              <ControlPointRounded />
            </IconButton>
          </Box>
          <GroupList />
        </Box>
      </Box>
    </Container>
  );
}
