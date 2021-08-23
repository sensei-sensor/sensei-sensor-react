import React from "react";

export default function Card(props) {
  return (
    <div className={"card"}>
      <div className={"low"}>
        <p className={"userName"}>{props.userName}</p>
        <p className={"userStatus"}>5分前</p>
      </div>
      <div className={"low"}>
        <p className={"description"}>見つけた場所</p>
        <p className={"place"}>{props.place}</p>
      </div>
    </div>
  );
}
