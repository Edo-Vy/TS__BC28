//tsrfc
import React from "react";
import { readBuilderProgram } from "typescript";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div
      className="position-fixed justify-content-center align-items-center"
      style={{
        background: "rgba(0,0,0, .5)",
        color: "#ffff",
      }}
    >
      Loading......
    </div>
  );
}
