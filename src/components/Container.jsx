import React from "react";
import Card from "./Card";

export default function Container() {
  return (
    <div className="container">
      <p className={"y"}>5年 情報コース</p>
      <div className={"x"}>
        <Card userName={"吉田先生"} place={"吉田教員室"} />
        <Card userName={"太田先生"} place={"図書館"} />
      </div>
    </div>
  );
}
