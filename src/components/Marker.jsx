import { useState, useRef } from "react";

export function Marker({ marker, x, y }) {
  let style = {
    position: "absolute",
    left: x,
    top: y,
  };
  return <img style={style} src={marker} alt="" />;
}
