import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import TransferList from "../components/TransferList";
import PublicationTime from "../components/PublicationTime";
import OpenDays from "../components/OpenDays";

export default function MaterialUserPage() {
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
          <OpenDays />
          <PublicationTime />
        </Box>
        <Box mt={3}>
          <Typography variant={"h6"}>
            <Box fontWeight={700}>公開場所</Box>
          </Typography>
          <TransferList />
        </Box>
      </Box>
    </Container>
  );
}
