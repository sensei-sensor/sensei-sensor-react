import React from "react";
import GenericTemplate from "../GenericTemplate.jsx";
import GroupContainer from "../components/main/GroupContainer";

export default function MainPage() {
  return (
    <GenericTemplate>
      <GroupContainer />
      <GroupContainer />
    </GenericTemplate>
  );
}
