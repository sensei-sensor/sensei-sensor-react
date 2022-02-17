import { LinearProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import GenericTemplate from "../GenericTemplate";
import GroupContainer from "../components/main/GroupContainer";

export default function DisasterPage() {
  const [notFound, setNotFound] = React.useState(null);
  const [discovery, setDiscovery] = React.useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_HOST + "sensei-sensor-php/WebAPI/disaster/")
      .then((res) => {
        setNotFound(res.data.notFoundUserList);
        setDiscovery(res.data.discoveryUserList);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (notFound === null || discovery === null) {
    return <LinearProgress />;
  } else {
    return (
      <GenericTemplate>
        <GroupContainer groupName={"未検出"} users={notFound} />
        <GroupContainer groupName={"検出済み"} users={discovery} />
      </GenericTemplate>
    );
  }
}
