// eslint-disable-next-line react/prop-types
export function Counter({ counter, x, y }) {
  let style = {
    position: "absolute",
    left: x,
    top: y,
  };
  return (
    <img className="z-negative absolute" src={counter} style={style} alt="" />
  );
}
