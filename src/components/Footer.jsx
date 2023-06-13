/* eslint-disable react/prop-types */
export function Footer({ hasWinner, turn }) {
  return (
    <footer
      className={`z-0 rounded-t-[60px] h-[200px] w-screen ${
        hasWinner
          ? turn === "red"
            ? "bg-coral-pink"
            : "bg-dandelion"
          : "bg-iris"
      } absolute bottom-0`}
    ></footer>
  );
}
