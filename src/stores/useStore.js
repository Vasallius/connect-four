import { create } from "zustand";

const useStore = create((set) => ({
  turn: "red",
  markers: [],
  board: [[], [], [], [], [], [], []],
  counter: 30,
  hasWinner: false,
  isPaused: false,
  setTurn: (turn) => set(() => ({ turn: turn })),
  setMarkers: (markers) => set(() => ({ markers: markers })),
  setBoard: (board) => set(() => ({ board: board })),
  setCounter: (counter) => set(() => ({ counter: counter })),
  togglePause: (isPaused) => set(() => ({ isPaused: isPaused })),
  setWinner: (hasWinner) => set(() => ({ hasWinner: hasWinner })),
}));

export default useStore;
