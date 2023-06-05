import { useState, useRef } from "react";

export function Marker({ MarkerRed, x, y }) {
  let style = {
    position: "absolute",
    left: x,
    top: y,
  };
  return <img style={style} src={MarkerRed} alt="" />;
}
