import { create } from "zustand";

const useConfigStore = create((set) => ({
  account: { username: "", email: "" },
  isPlaying: false,
  isConnected: false,
  setAccount: (username, email) =>
    set({
      account: { username, email },
    }),
  removeAccount: () => set({ account: { username: "", email: "" } }),
  togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setIsConnected: () => set({ isConnected: true }),
}));

export default useConfigStore;
