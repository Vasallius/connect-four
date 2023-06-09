import { create } from "zustand";

const useStore = create((set) => ({
  turn: "red",
  markers: [],
  board: [[], [], [], [], [], [], []],
  counter: 30,
  p1score: 0,
  p2score: 0,
  hasWinner: false,
  isPaused: false,
  setTurn: (turn) => set(() => ({ turn: turn })),
  setMarkers: (markers) => set(() => ({ markers: markers })),
  setBoard: (board) => set(() => ({ board: board })),
  setCounter: (counter) => set(() => ({ counter: counter })),
  togglePause: (isPaused) => set(() => ({ isPaused: isPaused })),
  setWinner: (hasWinner) => set(() => ({ hasWinner: hasWinner })),
  setScore: (player, score) => {
    if (player === 1) {
      set(() => ({ p1score: score }));
    } else if (player === 2) {
      set(() => ({ p2score: score }));
    }
  },
}));

export default useStore;
