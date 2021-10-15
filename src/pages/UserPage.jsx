import { Box, Container, Typography } from "@mui/material";
import React from "react";
import GenericTemplate from "../GenericTemplate";
import GroupList from "../components/user/GroupList";
import PublicationDays from "../components/user/PublicationDays";
import PublicationList from "../components/user/PublicationList";
import PublicationTime from "../components/user/PublicationTime";

export default function UserPage() {
  return (
    <GenericTemplate>
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
            <PublicationList />
          </Box>
          <Box mt={3}>
            <GroupList />
          </Box>
        </Box>
      </Container>
    </GenericTemplate>
  );
}
