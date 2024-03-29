import { create } from "zustand";

const useConfigStore = create((set) => ({
  account: { username: "", email: "", stars: 0 },
  isPlaying: false,
  isConnected: false,
  setAccount: (username, email, stars) =>
    set({
      account: { username, email, stars },
    }),
  removeAccount: () => set({ account: { username: "", email: "" } }),
  togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setIsConnected: () => set({ isConnected: true }),
  incrementStar: () =>
    set((state) => ({ account: { stars: state.account.stars + 1 } })),
  decrementStar: () =>
    set((state) => ({ account: { stars: state.account.stars - 1 } })),
}));

export default useConfigStore;
