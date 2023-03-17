import { create } from "zustand";

const useConfigStore = create((set) => ({
  account: { username: "", email: "" },
  isPlaying: false,
  setAccount: (username, email) =>
    set({
      account: { username, email },
    }),
  removeAccount: () => set({ account: { username: "", email: "" } }),
  togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default useConfigStore;
