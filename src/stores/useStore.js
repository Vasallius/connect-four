import { create } from "zustand";

const useStore = create((set) => ({
  turn: "red",
  markers: [],
  board: [[], [], [], [], [], [], []],
  counter: 30,
  setTurn: (turn) => set(() => ({ turn: turn })),
  setMarkers: (markers) => set(() => ({ markers: markers })),
  setBoard: (board) => set(() => ({ board: board })),
  setCounter: (counter) => set(() => ({ counter: counter })),
}));

export default useStore;
