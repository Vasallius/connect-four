/* eslint-disable react/prop-types */
export function Marker({ marker, x, y }) {
  let style = {
    position: "absolute",
    left: x,
    top: y,
  };
  return <img style={style} src={marker} alt="" />;
}
