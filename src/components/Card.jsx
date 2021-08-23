import React from "react";

export default function Card() {
  return (
    <div className={"card"}>
      <div className={"low"}>
        <p className={"userName"}>吉田先生</p>
        <p className={"userStatus"}>5分前</p>
      </div>
      <div className={"low"}>
        <p className={"description"}>見つけた場所</p>
      </div>
    </div>
  );
}
