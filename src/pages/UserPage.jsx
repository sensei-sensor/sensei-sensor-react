import { Portal } from "@mui/base";
import { Alert, Box, Container, Snackbar, Typography } from "@mui/material";
import React from "react";
import GenericTemplate from "../GenericTemplate";
import GroupList from "../components/user/GroupList";
import PublicationDays from "../components/user/PublicationDays";
import PublicationList from "../components/user/PublicationList";
import PublicationTime from "../components/user/PublicationTime";

export default function UserPage(props) {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarStatus, setSnackbarStatus] = React.useState({
    severity: "success",
    message: "",
  });
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const vertical = "bottom";
  const horizontal = "center";

  return (
    <GenericTemplate isLogin={props.isLogin} handleLogout={props.handleLogout}>
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
            <PublicationDays
              setSnackbarOpen={setSnackbarOpen}
              setSnackbarStatus={setSnackbarStatus}
            />
            <PublicationTime
              setSnackbarOpen={setSnackbarOpen}
              setSnackbarStatus={setSnackbarStatus}
            />
          </Box>
          <Box mt={3}>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>公開場所</Box>
            </Typography>
            <PublicationList />
          </Box>
          <Box mt={3}>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>グループ設定</Box>
            </Typography>
            <GroupList />
          </Box>
        </Box>
      </Container>
      <Portal>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarStatus.severity}
            sx={{ width: "100%" }}
          >
            {snackbarStatus.message}
          </Alert>
        </Snackbar>
      </Portal>
    </GenericTemplate>
  );
}
