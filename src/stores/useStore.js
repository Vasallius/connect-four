import { create } from "zustand";

const useStore = create((set) => ({
  turn: "red",
  markers: [],
  board: [[], [], [], [], [], [], []],
  setTurn: (turn) => set(() => ({ turn: turn })),
  setMarkers: (markers) => set(() => ({ markers: markers })),
  setBoard: (board) => set(() => ({ board: board })),
}));

export default useStore;
