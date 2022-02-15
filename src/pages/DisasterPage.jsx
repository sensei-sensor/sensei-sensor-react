import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import GenericTemplate from "../GenericTemplate";

export default function DisasterPage() {
  const [disaster, setDisaster] = React.useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_HOST + "sensei-sensor-php/WebAPI/disaster/")
      .then((res) => {
        setDisaster(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (disaster === null) {
    return <div>Loading...</div>;
  } else {
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
            <Typography variant={"h5"}>
              <Box fontWeight={700}>このセンサーで検出済み</Box>
            </Typography>
          </Box>
        </Container>
        <Container>
          <Box
            borderRadius={5}
            m={3}
            p={2}
            textAlign={"center"}
            bgcolor={"white"}
          >
            <Typography variant={"h5"}>
              <Box fontWeight={700} color={"red"}>
                このセンサーで未検出
              </Box>
            </Typography>
          </Box>
        </Container>
      </GenericTemplate>
    );
  }
}
